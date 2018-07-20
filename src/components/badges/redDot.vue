<template>
    <div class="ncf-red-dot" v-show="isVisible" :style="scaleStyle">
        <template v-if="value || $slots.default">
            <div class="red-circle-num" 
                 v-if="$slots.default" 
                 :style="backgroundColor"
            >
                <slot></slot>
            </div>
            <div class="red-circle-num" 
                 v-else 
                 v-text="value" 
                 :style="backgroundColor"
            ></div>
        </template>
        <template v-else>
            <div class="red-circle" 
                 :style="backgroundColor"
            ></div>
        </template>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'red-dot'

    export default {
        name: COMPONENT_NAME,
        props: {
            isVisible: {
                type: Boolean,
                default: true
            },
            value: {
                type: Number | String,
            },
            bgColor: {
                type: String,
                default: '#ed4e39'
            }
        },
        computed: {
            scaleStyle() {
                if(this.value || this.$slots.default) {
                    return {
                        'transform': 'scale(0.9)',
                        'webkitTransform': 'scale(0.9)'
                    }
                }
            },
            backgroundColor() {
                return {
                    'background': this.bgColor
                }
            }
        },
        methods: {
            show() {
                this.isVisible = true
            },
            hide() {
                this.isVisible = false
            }
        }
    }
</script>
<style scoped>
    .ncf-red-dot{
        margin: 0;
        padding: 0;
        display: inline-block;
        box-sizing: border-box;
        transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
    }
    .red-circle {
        width: 0.625rem;
        height: 0.625rem;
        border-radius: 100%;
    }
    .red-circle-num{
        display: inline-block;
        padding: 0 0.4rem;
        border-radius: 0.5rem;
        border: none;
        text-align: center;
        color: #fff;
        font-size: 0.625rem;
        font-weight: 100;
    }
</style>
