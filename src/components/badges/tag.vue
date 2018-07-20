<template>
    <div class="ncf-tag" v-show="isVisible" :style="scaleStyle" @click="onEvent">
       <template v-if="$slots.default">
           <div class="cnt" :style="tagStyle">
                <slot></slot>
           </div>
       </template>
       <template v-else>
          <div class="cnt" v-text="value" :style="tagStyle"></div>
       </template>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'ncf-tag'
    const EVENTS = {
        TAG_EVENT: 'tag-event'
    }
    export default {
        name: COMPONENT_NAME,
        props: {
            value: {
                type: String,
                value: ''
            },
            isVisible: {
                type: Boolean,
                default: true
            },
            large: {
                type: Boolean,
                default: false
            },
            isBdr: {
                type: Boolean,
                default: false
            }, 
            tagColor: {
                type: String,
                default: '#ed4e39'
            }
        },
        computed: {
            scaleStyle() {
                if(!this.large) {
                    return {
                        'transform': 'scale(0.9)',
                        'webkitTransform': 'scale(0.9)'
                    }
                }
            },
            tagStyle() {
                if(this.isBdr) {
                    return {
                        'color' : this.tagColor,
                        'border': '1px solid ' + this.tagColor
                    }
                }else{
                    return {
                        'background': this.tagColor,
                        'color': '#fff'
                    }
                }
            }
        },
        methods: {
            show() {
                this.isVisible = true
            },
            hide() {
                this.isVisible = false
            },
            onEvent() {
                this.$emit(EVENTS.TAG_EVENT, this.value)
            }
        }
    }
</script>

<style scoped>
    .ncf-tag{
        margin: 0;
        padding: 0;
        display: inline-block;
        box-sizing: border-box;
        transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
    }
    .ncf-tag .cnt{
        display: inline-block;
        padding: 0 0.4rem;
        border-radius: 0.5rem;
        text-align: center;
        font-size: 0.625rem;
        font-weight: 100;
    }
</style>
