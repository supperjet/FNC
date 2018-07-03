<template>
    <div class="ncf-flex-rect"
        :style="flexHeight"
        ref="flex"
        @touchstart="startDrag"
        @touchmove="onDrag"
        @touchend="stopDrag"
    >
        <svg class="stretch_1" width="100%" height="100%">
            <path :d="headerPath" :fill="fillStyle_t"></path>
        </svg>
        <div class="content" :style="contentPosition" ref="cnt">
            <slot>
                <h1 style="text-align:center;">上下拖动屏幕</h1>
            </slot>
        </div>
        <svg class="stretch_2" width="100%" height="100%" v-if="showBottom">
            <path :d="bottomPath" :fill="fillStyle_b"></path>
        </svg>
    </div>
</template>

<script>
    import Dynamics from 'dynamics.js'

    const COMPONENT_NAME = 'flex-rect';
    const CW = window.innerWidth;
    const CH = window.innerHeight;
    const center_x = CW / 2;

    export default {
        name: COMPONENT_NAME,
        props: {
            ctn_h: {                //外层容器的高度
                type: Number | String,
                default: CH,
            },
            path_w: {               
                type: Number | String,
                default: CW
            },
            path_h: {
                type: Number | String,
                default: 0
            },
            each: {
                type: Boolean,
                default: false
            },
            showBottom: {
                type: Boolean,
                default: true
            }

        },
        data() {
            return {
                dragging: false,
                start: {x: 0, y: 0 }, //拖拽开始点
                ct: {x: this.path_w/2, y: this.path_h },  //顶部贝塞尔曲线控制点
                cb: {x: this.path_w/2, y: this.ctn_h-this.path_h}, //底部贝塞尔曲线控制点
            }
        },
        computed: {
            center_x() {
                return this.path_w / 2;
            },
            headerPath() {
                 return `M0,0 L${this.path_w},0 ${this.path_w},${this.path_h} Q${this.ct.x},${this.ct.y} 0,${this.path_h}`;
            },
            bottomPath() {
                return `M0,${this.ctn_h} L${this.path_w},${this.ctn_h} ${this.path_w},${this.ctn_h-this.path_h} Q${this.cb.x},${this.cb.y} 0,${this.ctn_h-this.path_h}`
            },
            flexHeight() {
                return {
                    height: this.ctn_h + 'px'
                }
            },
            contentPosition() {
                const dy = this.ct.y - this.path_h;
                const dampen = dy > 0 ? 2 : 4;
                if(this.each) {
                    return {
                        transform: `translate3d(0, ${dy/dampen}px, 0)`,
                        webkitTransform: `translate3d(0, ${dy/dampen}px, 0)`
                    }
                }else{
                    return {}
                }
            },
            fillStyle_t() {
                let alpha = this.ct.y / 100;
                alpha = alpha > 0.5 ? 0.5 : Math.abs(alpha);
                return `rgba(200,200,200, ${alpha})`
            },
            fillStyle_b() {
                let alpha = Math.abs(this.cb.y) / 1000;
                alpha = alpha > 0.5 ? 1-Math.abs(alpha) : 0.5;
                return `rgba(200,200,200, ${alpha})`
            }
        },
        methods: {
            startDrag(e) {  //获取拖拽点
                e = e.changedTouches ? e.changedTouches[0] : e;
                this.dragging = true;
                this.start.x = e.pageX;
                this.start.y = e.pageY;
            },
            onDrag(e) {
                e = e.changedTouches ? e.changedTouches[0] : e;
                // 分两种情况 1、滚动(true) 2、不滚动(false) 判断标识 isScroll
                let scrollTopDisatance = this.$refs.flex.scrollTop;  //滚动的距离
                let cntHeight = this.$refs.cnt.scrollHeight;  //内容的高度
                let flexHeight = this.$refs.flex.offsetHeight; //容器高度
                let isScroll = scrollTopDisatance <= 0 ? false : true;
                let dy = e.pageY - this.start.y; //
                let direction = dy > 0 ? 1 : 0;  // 手指滑动的方向 1: 向下 0: 向上
                let dampen = dy > 0 ? 1.2 : 4;
                if(!isScroll) {  //如果不滚动 则直接判断手指滑动的方向
                    if(direction) { //如果向下滑动则对顶部的svg做操作
                        this.ct.x = this.center_x + (e.pageX - this.start.x);
                        this.ct.y = dy /dampen > 100 ? 100 : dy /dampen;
                    }else{ //否则对底部的svg做操作
                        this.cb.x = this.center_x + (e.pageX - this.start.x);
                        if(this.cb.y > this.ctn_h - 100) {
                             this.cb.y = (this.cb.y + dy/dampen);
                        }else{
                            this.cb.y = this.ctn_h - 100;
                        }
                    }
                }else{
                    if(direction) {
                        if(scrollTopDisatance <= 0) {
                            this.ct.x = this.center_x + (e.pageX - this.start.x);
                            this.ct.y = dy /dampen > 100 ? 100 : dy /dampen;
                        }
                    }else{
                        if(scrollTopDisatance + flexHeight >= cntHeight) { //滚动的高度+容器的高度 > 内容的高度 滚动到底部
                            this.cb.x = this.center_x + (e.pageX - this.start.x);
                        if(this.cb.y > this.ctn_h - 150) {
                             this.cb.y = (this.cb.y + dy/dampen);
                        }else{
                            this.cb.y = this.ctn_h - 150;
                        }
                        }
                    }
                }
            },
            stopDrag(e) {
                 e = e.changedTouches ? e.changedTouches[0] : e;
                 if(this.dragging) {
                    this.dragging = false;
                    Dynamics.animate(this.ct, {
                        x: center_x,
                        y: this.path_h
                    }, {
                        type: Dynamics.linear,
                        duration: 200,
                        friction: 280
                    });
                    Dynamics.animate(this.cb, {
                        x: center_x,
                        y: this.ctn_h - this.path_h
                    }, {
                        type: Dynamics.linear,
                        duration: 200,
                        friction: 280
                    })
                 }
            }
        }

    }
</script>

<style scoped>
    .ncf-flex-rec *{
        margin:0;
        padding:0;
    }
    .ncf-flex-rect {
        width: 100%;
        position: relative;
        overflow-y: auto;
    }
    .ncf-flex-rect .stretch_1{
        position: absolute;
        top:0;
        left:0;
        z-index: 1;
    }
    .ncf-flex-rect .stretch_2{
        position: absolute;
        bottom:0;
        left:0;
        z-index: 1;
    }
    .ncf-flex-rect .content{
        position: relative;
        z-index: 2;
    }
</style>
