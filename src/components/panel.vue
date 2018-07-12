<template>
    <div class="ncf-panel-item" :class="typeClass">
        <div class="ncf-panel-item-header flex flex-h flex-pack-justify flex-align-cente border-bottom-1px" @click="toggle">
           <div class="title">
                <slot name="title">
                    <span>锄禾</span>
                </slot>
            </div>
            <div class="icon flex flex-h flex-align-center flex-pack-center">
                <div class="tips" v-show="needTip">
                    <slot name="tips">
                        <span>更多</span>
                    </slot>
                </div>
                <i class="spread" :class="{iconActive: active}"></i>
            </div>
        </div>
        <div class="ncf-panel-item-content" :class="{panelDown: active}">
            <slot>
                    <p>锄禾日当午</p>

                    <p>汗滴禾下土</p>

                    <p>谁知盘中餐</p>

                    <p>粒粒皆辛苦</p>
            </slot>
        </div>
    </div>
</template>

<script>
    const COMPONENT_NAME = 'panel'

    export default {
        name: COMPONENT_NAME,
        props: {
            type: {
                type: String,
                default: ''
            },
            needTip: {
                type: Boolean,
                default: false
            },
            isActive: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                active: this.isActive
            }
        },
        watch: {
            isActive(newVal, oldVal) {
                this.active = newVal
            }
        },
        computed: {
            typeClass() {
                return this.type ? `${this.type}-panel` : ''
            }
        },
        methods: {
            toggle() {
                this.active = !this.active;
            }
        }
    }
</script>

<style scoped>
    @import '../common/common.css';

    .ncf-panel-item .ncf-panel-item-header{
        position: relative;
        padding: 10px 15px;
        background:#fff;
    }
    .ncf-panel-item .ncf-panel-item-header .title {
        color: rgb(51,51,51);
        font-size: 14px;
    }
    .ncf-panel-item .ncf-panel-item-header .icon .spread{
        width: 10px;
        height: 10px;
        border-bottom: 1px solid #CCC;
        border-right: 1px solid #CCC;
        content: "";
        transform-origin: center center;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transition: transform .2s;
    }
    .ncf-panel-item .ncf-panel-item-header .icon .spread.iconActive{
        transform: rotate(45deg) translateY(-4px);
        -webkit-transform: rotate(45deg) translateY(-4px);
    }
    .ncf-panel-item .ncf-panel-item-header .icon .tips {
        margin-right: 10px;
    }
    .ncf-panel-item .ncf-panel-item-content{
        background: #fff;
        max-height: 0;
        overflow: hidden;
    }
    .ncf-panel-item .ncf-panel-item-content.panelDown{
        max-height: 3000px;
        transition: max-height 1.2s cubic-bezier(0.55, 0.09, 0.68, 0.53);
    }
</style>
