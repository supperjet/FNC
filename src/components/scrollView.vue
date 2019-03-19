<template>
    <div 
        ref="wrapper"
        class="fnc-scroll-view-wrapper"
        :style="wrapStyleHeight"
    >
        <div 
            ref="content"
            class="fnc-scroll-view-content" 
            :style="{width: scrollContentWidth}"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
const COMPONENT_NAME = 'fnc-scroll-view'

export default {
    name: COMPONENT_NAME,
    props: {
        direction: {
            type: String,
            default: 'V'
        },
        scrollWrapperHeight: {
            type: String
        },
        scrollContentWidth: {
            type: String,
        }
    },
    data() {
        return {
            scrollOpts: {
                scrollY: true,
                scrollX: false,
                bounce: true,
                tap: true,
            }
        }
    },
    computed: {
        wrapStyleHeight() {
            if(this.scrollWrapperHeight) {
                return { 'height': this.scrollWrapperHeight }  
            }
        }
    },
    mounted() {
        this.wrapper = this.$refs['wrapper']
        this.content = this.$refs['content']
        this.$nextTick(() => {
            this._initScroll(this.scrollOpts)
        })
    },
    methods: {
        _initScroll(opt) {
            // 处理参数
            this._margeOptionsConfig()
            // 初始化
            if(!this.scroll) {
                this.scroll = new BScroll(this.wrapper, opt)
            }
        },
        _margeOptionsConfig() {
            if(this.direction === 'H') {
               this.scrollOpts.scrollY = false
               this.scrollOpts.scrollX = true
            }
        }
    }
}
</script>

<style scoped>
    .fnc-scroll-view-wrapper{
        border: 1px solid #000;
        overflow: hidden;
    }
</style>
