<template>
    <div class="ncf-tab-container">
        <div class="ncf-tab-container-wrap" ref="container-wrap">
            <slot></slot>
        </div>
    </div>
  
</template>

<script>
    import { addClass, removeClass, once } from '../../../common/dom.js'

    const COMPONENT_NAME = "ncf-tab-container"
    const EVENT = {
        CHANGE_CURRENT_ACTIVE: 'change-current-active'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            activeItem: {
                type: String | Number,
                default: 0
            }
        },
        data() {
            return {
                start: {x:0, y:0},
                currentActive: this.activeItem
            }
        },
        mounted() {
            this.$containerWrap = this.$refs['container-wrap'];
            this.pageWidth = this.$containerWrap.clientWidth;
        },

        methods: {
            swipMove(offset) {
                this.$containerWrap.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
            },
            swipeLeaveTransition(lastIndex = 0) {
                 if(typeof this.index !== 'number') {
                    this.index = this.findIndex(this.$children, this.currentActive);
                    console.log(lastIndex);
                    this.swipMove(-(lastIndex) * this.pageWidth)
                 }

                 setTimeout(() => {
                    addClass(this.$containerWrap, 'swipe-transition');
                    this.swipMove(-this.index * this.pageWidth);
                    once(this.$containerWrap, 'webkitTransitionEnd', _ => {
                        removeClass(this.$containerWrap, 'swipe-transition')
                        this.$containerWrap.style.webkitTransform = '';
                        this.index = null;
                    });
                 }, 0)
            },
            findIndex(arr, target) {
                let targetIndex;
                for(let i=0; i<arr.length; i++) {
                    if(arr[i].index == target) {
                        targetIndex = i;
                        break;
                    }
                }
                return targetIndex;
            }
        },
        watch: {
            activeItem(newValue, oldValue) {
                this.currentActive = newValue;
            },
            currentActive(newValue, oldValue) {
                this.$emit(EVENT.CHANGE_CURRENT_ACTIVE, newValue);
                const lastIndex = this.findIndex(this.$children, oldValue);
                console.log(lastIndex)
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
        background: #fff;
        overflow: hidden;
        display: flex;
    }
    .swipe-transition {
        transition: transform 450ms ease-in-out;
    }
</style>
