<template>
    <div ref="wrapper" class="ncf-scroll-wrapper">
        <div class="ncf-scroll-content">
            <div ref="listWrapper" class="ncf-scroll-list-wrapper">
                <slot>
                    <ul class="ncf-scroll-list">
                        <li class="ncf-scroll-item border-bottom-1px"
                            v-for="(item, index) in data"
                            :key="index"
                            @click="clickItem(item, index)"    
                        >{{item}}</li>
                    </ul>
                </slot>
            </div>
            <slot name="pullup"
                  :pullUpLoad="pullUpLoad"
                  :isPullUpLoad="isPullUpLoad"
            >
                <div class="ncf-pullup-wrapper flex flex-align-center flex-pack-center" 
                     v-if="pullUpLoad"
                >
                    <div class="before-trigger" v-if="!isPullUpLoad">
                        <span>{{ pullUpTxt }}</span>
                    </div>
                    <div class="after-trigger" v-else>
                        <scroll-loading></scroll-loading>
                    </div>
                </div>
            </slot>
        </div>
        <slot
            name="pulldown"
            :pullDownRefresh="pullDownRefresh"
            :pullDownStyle="pullDownStyle"
            :beforePullDown="beforePullDown"
            :isPullingDown="isPullingDown"
        >
            <div class="ncf-pulldown-wrapper flex flex-align-center flex-pack-center" 
                 :style="pullDownStyle" 
                 v-if="pullDownRefresh"
            >
                <div class="before-trigger" v-if="beforePullDown" :style="pullDownTipStyle" style="font-weight:lighter">
                    <span>{{pullDownTxt}}</span>
                </div>
                <div class="after-trigger" v-else>
                    <div v-if="isPullingDown" class="loading">
                         <scroll-loading></scroll-loading>
                    </div>
                    <div v-else>
                        <span>{{ refreshTxt }}</span>
                    </div>
                </div>
            </div>
        </slot>
    </div>
  
</template>

<script>
    import BScroll from 'better-scroll'
    import ScrollLoading from './loading/scroll_loading.vue'
    import { getRect } from '../common/dom.js'

    const COMPONENT_NAME = 'list-view';
    const DIRECTION_H = 'horizontal';        //水平方向
    const DIRECTION_V = 'vertical';          //垂直方向
    const PULL_DOWN_TIP_1 = '下拉刷新';
    const PULL_DOWN_TIP_2 = '松开有惊喜';
    const DEFAULT_REFRESH_TXT = "更新成功";   //默认更新成功提示
    const MORE = '上拉加载更多';
    const NOMORE= '没有更多数据';

    const EVENTS = {
        SCROLL: 'scroll',
        CLICK: 'click',
        PULLING_DOWN: 'pulling-down',
        PULLING_UP: 'pulling-up',
        BEFORE_SCROLL_START: 'before-scroll-start'
    }

    //默认配置
    const DEFAULT_OPTIONS = {
        observeDOM: true,
        click: true,
        probeType: 1,
        scrollbar: false,       //是否出现滚动条
        pullDownRefresh: false,  //是否下拉刷新
        pullUpLoad: false  //下拉加载
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            data: {
                type: Array,
                default: []
            },
            options: {
                type: Object,
                default() {
                    return {}
                }
            },
            listenScroll: {
                type: Boolean,
                default: false
            },
            listenBeforeScroll: {
                type: Boolean,
                default: false
            },
            direction: {
                type: String,
                default: DIRECTION_V
            },
            refreshDelay: {
                type: Number,
                default: 20
            },
            
        },
        data() {
            return {
                beforePullDown: true,
                isPullingDown: false,
                isPullUpLoad: false,
                pullUpDirty: true,
                pullDownStyle: '',
                scale: 0.1,
                pullDownTxt: PULL_DOWN_TIP_1
            }
        },
        computed: {
            pullUpLoad() {
                return this.options.pullUpLoad;
            },
            pullDownRefresh() {
                return this.options.pullDownRefresh;
            },
            pullUpTxt() {
                const pullUpLoad = this.pullUpLoad;
                const txt = pullUpLoad && pullUpLoad.txt;
                const moreTxt = txt && txt.more || MORE;
                const noMoreTxt = txt && txt.noMore || NOMORE;
                return this.pullUpDirty ? moreTxt : noMoreTxt;
            },
            refreshTxt() {
                const pullDownRefresh = this.pullDownRefresh;
                return pullDownRefresh && pullDownRefresh.txt || DEFAULT_REFRESH_TXT;
            },
            pullDownTipStyle() {
                return {
                    opacity: this.scale,
                    transform: 'scale('+this.scale+')',
                    webkitTransform: 'scale('+this.scale+')'
                }
            }
        },
        created() {
            this.pullDownInitTop = -50;
        },
        mounted() {
            this.$nextTick(() => {
                this._initScroll();
            })
        },
        methods: {
            _initScroll() {
                if(!this.$refs.wrapper) return;

                this._calculateMinHeight();

                //合并参数
                let options = Object.assign({}, DEFAULT_OPTIONS, {
                    scrollY: this.direction === DIRECTION_V,
                    scrollX: this.direction === DIRECTION_H
                }, this.options);

                //创建scroll实例
                this.scroll = new BScroll(this.$refs.wrapper, options);

                //监听滚动事件
                if (this.listenScroll) {
                    this.scroll.on('scroll', (pos) => {
                        this.$emit(EVENTS.SCROLL, pos);
                    })
                }

                //监听beforeScrollStart事件
                if (this.listenBeforeScroll) {
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit(EVENTS.BEFORE_SCROLL_START);
                    })
                }

                if (this.pullDownRefresh) {
                    this._initPullDownRefresh();
                }

                if (this.pullUpLoad) {
                    this._initPullUpLoad();
                }
            },

            disable() {
                this.scroll && this.scroll.disable();
            },

            enable() {
                this.scroll && this.scroll.enable();
            },

            refresh() {
                this._calculateMinHeight();
                this.scroll && this.scroll.refresh();
            },

            destroy() {
                this.scroll.destroy();
            },
            scrollTo() {
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
            },
            scrollToElement() {
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
            },
            clickItem(item) {
                this.$emit(EVENTS.CLICK, item)
            },
            forceUpdate(dirty) {
                if (this.pullDownRefresh && this.isPullingDown) {
                    this.isPullingDown = false;
                    this._reboundPullDown().then(() => {
                        this._afterPullDown(dirty);
                    })
                } else if (this.pullUpLoad && this.isPullUpLoad) {
                    this.isPullUpLoad = false;
                    this.scroll.finishPullUp();
                    this.pullUpDirty = dirty;
                    dirty && this.refresh();
                } else {
                    dirty && this.refresh();
                }
            },
            _calculateMinHeight() {
                if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
                    this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
                }
            },
            _initPullDownRefresh() {
                this.scroll.on('pullingDown', () => {
                    this.beforePullDown = false;
                    this.isPullingDown = true;
                    this.$emit(EVENTS.PULLING_DOWN);
                })

                this.scroll.on('scroll', (pos) => {
                    if (this.beforePullDown) {
                        this.scale = (pos.y/100 + 0.2) >= 1.0 ? 1.0 :(pos.y/100 + 0.2);
                        this.pullDownTxt = pos.y >= 60 ? PULL_DOWN_TIP_2 : PULL_DOWN_TIP_1;
                        this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`;
                    } else {
                        this.pullDownStyle = `top:${Math.min(pos.y - 30, 10)}px`;
                    }
                })
            },
            _initPullUpLoad() {
                this.scroll.on('pullingUp', () => {
                    this.isPullUpLoad = true;
                    this.$emit(EVENTS.PULLING_UP);
                })
            },
            _reboundPullDown() {
                const {stopTime = 600} = this.pullDownRefresh;
                return new Promise((resolve) => {
                    setTimeout(() => {
                        this.scroll.finishPullDown();
                        this.isPullingDown = false;
                        resolve();
                    }, stopTime)
                })
            },
            _afterPullDown(dirty) {
                setTimeout(() => {
                    this.pullDownStyle = `top:${this.pullDownInitTop}px`
                    this.beforePullDown = true
                    dirty && this.refresh()
                }, this.scroll.options.bounceTime)
            }
        },

        watch: {
            data(newVal, oldVal) {
                setTimeout(() => {
                    this.forceUpdate(true)
                }, this.refreshDelay)
            }
        },

        components: {
            ScrollLoading
        }
    }
    
</script>

<style scoped>
    @import '../common/common.css';

    .ncf-scroll-wrapper {
        position: relative;
        height: 100%;
        overflow: hidden;
    }
    .ncf-pulldown-wrapper {
        position: absolute;
        width: 100%;
        left: 0;
        transition: all;
    }
    .ncf-pulldown-wrapper .after-trigger{
        font-size: 12px;
        font-weight: lighter;
        color: #999;
    }
    .ncf-pullup-wrapper {
        width: 100%;
    }
    .ncf-pullup-wrapper .before-trigger {
        padding: 22px 0;
        min-height: 1em;
        font-size: 12px;
        font-weight: lighter;
        color: #999;
    }
    .ncf-pullup-wrapper .after-trigger {
        padding: 19px 0;
        font-weight: lighter;
        color: #999;
    }
    .ncf-scroll-content{
        position: relative;
        z-index: 1;
    }
    .ncf-scroll-item {
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        padding-left: 15px;
        position: relative;
    }
</style>
