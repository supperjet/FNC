<template>
    <div class="ncf-tab-container" ref="container">
        <div class="ncf-tab-container-wrap" ref="containerWrap">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    const COMPONENT_NAME = "ncf-tab-container"
    const DIRECTION_H = 'horizontal'
    const DIRECTION_V = 'vertical'

    const EVENTS = {
        CHANGE_ACTIVE: 'change-active'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            activeItem: {
                type: Number,
                default: 0
            },
            threshold: {
                type: Number,
                default: 0.3
            },
            speed: {
                type: Number,
                default: 400
            },
            direction: {
                type: String,
                default: DIRECTION_H,
            },
            bounce: {            //滑到末尾开启弹性动画
                type: Boolean,
                default: false
            },
            stopDrag: {         //禁用拖动
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                datas: [0,1,2,3,4,5],
                currentActive: this.activeItem
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.refresh()
            })      
        },
        watch: {
            activeItem(newVal, oldVal) {
                if(newVal != this.currentActive) {
                    this.currentActive = newVal
                    this.container && this.container.goToPage(newVal)
                }
            }
        },
        methods: {
            refresh() {
                if(this.container === null) return
                this.container && this.container.destroy()
                this._setContainerStyle()
                this._initTabSlide()
            },
            //初始化
            _initTabSlide() {
                const eventPassthrough = this.direction === DIRECTION_H  ? DIRECTION_V : ''
                this.container = new BScroll(this.$refs.container, {
                    scrollX: this.direction === DIRECTION_H,
                    scrollY: this.direction === DIRECTION_V,
                    momentum: false,
                    bounce: this.bounce,
                    eventPassthrough,
                    snap:{
                        threshold: this.threshold,
                        speed: this.speed
                    },
                    stopPropagation: this.stopPropagation,
                    click: false,
                    observeDOM: false
                })

                //默认滚动
                this.container.goToPage(this.currentActive, 0, 0)

                if(this.stopDrag) {
                    this.container.on('scroll', this._onScrollDisable()) //禁用tocuhstart touchmove touchend等事件
                }else{
                    //监听滚动结束动作
                    this.container.on('scrollEnd', this._onScrollEnd)
                }
            },
            _setContainerStyle() {
                let allSize = 0
                this.children = this.$refs.containerWrap.children
                const target = this.direction === DIRECTION_H ? 'width' : 'height'
                const containerSize = this.$refs.container[`client${target[0].toUpperCase() + target.slice(1)}`]
                const len = this.children.length
                for(let i=0; i<len; i++) {
                    this.children[i].style[target] = `${containerSize}px`      //设置每一个item的宽度为container的宽度
                    allSize += containerSize                                   //总的宽度
                }
                this.$refs.containerWrap.style[target] = `${allSize}px`        //设置containerWrap的总宽度
            },
            _onScrollEnd() {
                let tabIndex = this.direction == DIRECTION_H ? this.container.getCurrentPage().pageX : this.container.getCurrentPage().pageY
                if(this.currentActive != tabIndex) {
                    this.currentActive = tabIndex
                    this.$emit(EVENTS.CHANGE_ACTIVE, this.currentActive)
                }
            },
            _onScrollDisable() {
                this.container && this.container.disable()
            }
        },
         destroyed() {
            if (this.container) {
                this.container.destroy()
                this.container = null
            }
        }
    }
    
</script>

<style scoped>
    .ncf-tab-container {
        position: relative;
        overflow: hidden;
    }
    .ncf-tab-container-wrap{
        position: relative;
        height: 100%;
        overflow: hidden;
        white-space: nowrap;
    }
    
</style>
