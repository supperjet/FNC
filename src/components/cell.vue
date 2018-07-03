<template>
    <ncf-rect :mode="mode" 
              :disabled="disabled" 
              class="cell-rect"      
    >
        <div class="ncf-cell flex flex-h flex-align-center flex-pack-justify" 
             :class="{'border-bottom-1px': needBorderBtm}" @click="handleCellEvent"
        >
            <div class="cell-main flex">
                <div class="cell-img" v-show="iconShow">
                    <slot name="pic">
                        <img src="" class="cell-pic"/>
                    </slot>
                </div>
                <div class="cell-content">
                    <slot name="content">锄禾锄禾锄禾</slot>
                </div>
                <slot name="help"></slot>
            </div>

            <div class="cell-label flex flex-h flex-align-center flex-pack-center" 
                 v-show="labelShow"
            >
                <div v-show="tipShow" class="tip-show">
                    <slot name="tips">
                        <span>你财富</span>
                    </slot>
                </div>
                <i class="cell-icon"></i>
            </div>
        </div>
    </ncf-rect>
</template>

<script>
    import NcfRect from './rect.vue'
    const COMPONENT_NAME = "cell"
    const EVENTS = {
        CELL_EVENT: 'cell-event'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            iconShow: {
                type: Boolean,
                default: false
            },
            tipShow: {
                type: Boolean,
                default: false
            },
            needBorderBtm: {
                type: Boolean,
                default: false
            },
            labelShow: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                mode: 'normal'
            }
        },
        methods: {
            handleCellEvent(e) {
                this.$emit(EVENTS.CELL_EVENT, e);
            }
        },
        components:{
            NcfRect
        }
    }

</script>

<style scoped>
    @import '../common/common.css';

    .ncf-cell{
        position: relative;
        padding: 12px 15px;
    }
    .ncf-cell .cell-main{
        color: rgb(51,51,51);
    }
    .ncf-cell .cell-main .cell-img {
        width:20px;
        height: 20px;
        margin-right: 8px;
    }
    .ncf-cell .cell-main .cell-content{
        font-size: 14px;
    }
    .cell-rect.disabled .cell-main .cell-content{
        font-size: 14px;
        color:#c3c3c3;
    }
    .ncf-cell .cell-label{
        font-size: 12px;
    }
    .ncf-cell .cell-label .tip-show {
        color:#999;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-right: 5px;
    }
    .ncf-cell .cell-label .cell-icon {
        width: 10px;
        height: 10px;
        display: block;
        border-bottom: 1px solid #CCC;
        border-right: 1px solid #CCC;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transition: transform .2s;
        -webkit-transition: transform .2s;
    }
    .cell-rect.disabled .cell-label .cell-icon{
        border-bottom: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
    }
</style>
