<template>
    <div class="ncf-notice-bar">
        <ncf-popup position="top" :hasMask="false" ref="noticePop">
            <div class="container flex flex-h flex-pack-justify flex-align-center"
                 :style="{'background': bgColor}"
            >
                <slot name="icon"></slot>
                <template>
                    <div class="txt" v-if="!$slots.content" v-html="content"></div>
                    <div class="txt" v-else>
                        <slot name="content"></slot>
                    </div>
                </template>
                <div class="iconClose" @click="hide">×</div>
            </div>
        </ncf-popup>
    </div>
</template>
<script>
    import ncfPopup from '../ncfPop/ncfPopup.vue'

    const bgColorMap = {
        success: '#4bbb8b',
        warn: '#ffa258',
        fail: '#f73859',
        normal: '#323643'
    }

    const COMPONENT_NAME = 'ncf-notice-bar'
    export default {
        name: COMPONENT_NAME,
        props: {
            content: {
                type: String,
                default: ''
            },
            noticeType: {
                type: String,
                default: 'normal'
            },
            autoClose: {
                type: Boolean,
                default: true
            },
            duration: {
                type: Number | String,
                default: 2000
            }
        },
        computed: {
            bgColor() {
                if(bgColorMap[this.noticeType]) {
                    return bgColorMap[this.noticeType]
                }else{
                    return this.noticeType
                }
            }
        },
        methods: {
            show() {
                this.$refs.noticePop.show()
                if(this.autoClose) {
                    setTimeout(() => {
                        this.hide()
                    }, this.duration)
                }
            },
            hide() {
                this.$refs.noticePop.hide()
            }
        },
        components: {
            ncfPopup
        }
    }
</script>
<style scoped>
    @import '../../common/common.css';
    .ncf-notice-bar .container {
        color: #fff;
        padding: 5px 10px;
        font-size: 14px;
        font-weight: 300;
    }
    .ncf-notice-bar .iconClose {
        color: #f0f0f0;
        font-size: 16px;
    }
</style>
