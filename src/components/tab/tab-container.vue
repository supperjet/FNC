<template>
    <div 
         class="ncf-tab-container"
         @touchstart="startDrag"
         @touchmove="onDrag"
         @touchend="endDrag"
         @mousedown="startDrag"
         @mousemove="onDrag"
         @mouseup="endDrag">

        <div class="ncf-tab-container-wrap" ref="container-wrap">
            <slot></slot>
        </div>
    </div>
  
</template>

<script>
    import { addClass, removeClass, once } from '../../common/dom.js'
    
    const COMPONENT_NAME = "ncf-tab-container"
    const EVENT = {
        CHANGE_CURRENT_ACTIVE: 'change-current-active'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            value: {
                type: String | Number
            },
            swipeable: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                start: {x:0, y:0},
                swiping: false,
                activeItems: [],
                pageWidth: 0,
                currentActive: this.value
            }
        },

        mounted() {
            if(!this.swipeable) return;
            this.$containerWrap = this.$refs['container-wrap'];
            //整个containe的宽度
            this.pageWidth = this.$containerWrap.clientWidth;
            //限定超过limitWidth就算移动
            this.limitWidth = this.pageWidth / 4;
        },

        methods: {
            //移动
            swipMove(offset) {
                this.$containerWrap.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
                this.swiping = true;
            },
            swipeLeaveTransition(lastIndex = 0) {
                 if(typeof this.index !== 'number') {
                    this.index = this.findIndex(this.$children, this.currentActive);
                    this.swipMove(-lastIndex * this.pageWidth)
                 }

                 setTimeout(() => {
                    addClass(this.$containerWrap, 'swipe-transition');
                    this.swipMove(-this.index * this.pageWidth);
                    once(this.$containerWrap, 'webkitTransitionEnd', _ => {
                        removeClass(this.$containerWrap, 'swipe-transition')
                        this.$containerWrap.style.webkitTransform = '';
                        this.swiping = false;
                        this.index = null;
                    });
                 }, 0)
            },

            startDrag(e) {
                if(!this.swipeable) return;
                e = e.changedTouches ? e.changedTouches[0] : e;
                this.dragging = true;
                this.start.x = e.pageX;
                this.start.y = e.pageY;
            },

            onDrag(e) {
                e.preventDefault();

                if(!this.dragging) return;

                let dragSwiping;
                
                const evt = e.changedTouches ? e.changedTouches[0] : e;
                const offsetTop = evt.pageY - this.start.y;
                const offsetLeft = evt.pageX - this.start.x;
                const y = Math.abs(offsetTop);
                const x = Math.abs(offsetLeft);

                dragSwiping = !(x<5 || (x>=5 && y>=x*1.73));
                
                if(!dragSwiping) return;
               
                //item 的个数
                const len = this.$children.length -1;

                //获取当前activeItem的index
                const index = this.findIndex(this.$children, this.currentActive);

                //当前item的宽度
                const currentPageOffset = index * this.pageWidth;

                //移动的距离
                const offset = offsetLeft - currentPageOffset;

                //移动的绝对距离
                const absOffset = Math.abs(offset);

                //最后页和第一页不可继续拖动
                if((absOffset > len * this.pageWidth) || (offset > 0 && offset < this.pageWidth)) {
                    this.swiping = false;
                    return;
                }

                this.offsetLeft = offsetLeft;
                this.index = index;

                //移动
                this.swipMove(offset);
            },

            endDrag(e) {
                if(!this.swiping) return;
                
                this.dragging = false;

                //移动方向
                const direction = this.offsetLeft > 0 ? -1 : 1;

                //如果超过限定的移动宽度就算移动
                const isChange = Math.abs(this.offsetLeft) > this.limitWidth;

                if(isChange) {
                    //当前的index加 1
                    this.index += direction;

                    //设置当前激活项
                    const child = this.$children[this.index];

                    if(child) {
                        this.currentActive = child.id;
                        return;
                    }
                }

                this.swipeLeaveTransition();
            },

            findIndex(arr, target) {
                var targetIndex;
                for(let i=0; i<arr.length; i++) {
                    if(arr[i].id === target) {
                        targetIndex = i;
                    }
                }
                return targetIndex;
            }
        },
        watch: {
            value(newValue) {
                this.currentActive = newValue;
            },

            currentActive(newValue, oldValue) {
                this.$emit(EVENT.CHANGE_CURRENT_ACTIVE, newValue);
                if(!this.swipeable) return;
                const lastIndex = this.findIndex(this.$children, oldValue);
                this.swipeLeaveTransition(lastIndex);
            }
        }
    }
    
</script>

<style scoped>
    .ncf-tab-container {
        position: relative;
        overflow: hidden;
    }
    .ncf-tab-container-wrap {
        display: flex;
    }
    .swipe-transition {
        transition: transform 450ms ease-in-out;
    }
</style>
