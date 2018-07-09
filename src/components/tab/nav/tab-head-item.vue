<template>
    <a class="ncf-tab-item flex flex-1 flex-h flex-align-center flex-pack-center"
       :class="{ 
            'selected': $parent.activeItem === index , 
            'disabled': disabled, 
            'noline': !underline
        }"
       :style="{'margin-left': lw+'px', 'margin-right': lw+'px'}"
       @click="!disabled && handleTabClick(index)"
    >
       <div class="ncf-tab-item-label">
           <slot></slot>
       </div>
    </a>
</template>

<script>
    const COMPONENT_NAME = "ncf-tab-item"
    const EVENT = {
        HANDLE_TAB_CLICK: "handle-tab-item-click"
    }
    export default {
        name: COMPONENT_NAME,
        props: {
            index: {
                type: String | Number
            },
            disabled: {
                type: Boolean,
                default: false
            },
            underline: {
                type: Boolean,
                default: true
            },
            lw: {
                type: Number | String,
                default: 0
            }
        },
        methods: {
            handleTabClick() {
                this.$parent.$emit(EVENT.HANDLE_TAB_CLICK, this.index);
            }
        }
    }
    
</script>

<style scoped>
    @import '../../../common/common.css';

    .ncf-tab-item {
        position: relative;
        padding: 15px 0px;
        margin: 0 0;
        text-decoration: none;
        text-align: center;
        color: #333;
        font-size: 14px;
        transition: opacity 0.5s;
    }
    .ncf-tab-item .ncf-tab-item-icon{
        margin-right: 5px;
    }
    .ncf-tab-item .ncf-tab-item-label{
        line-height: 1;
        letter-spacing: 0.05rem;
    }
    .ncf-tab-item.selected{
        color:#ed4e39;
    }
    .ncf-tab-item.selected::after{
        position: absolute;
        z-index: 1;
        bottom: 0;
        content: '';
        display: block;
        height: 2px;
        width: 100%;
        background-color: #ed4e39;
        border-radius: 1px;
    }
    .ncf-tab-item.noline::after{
        display: none;
    }
    .ncf-tab-item.disabled{
        color: #d0d0d0;
        background: #eee;
    }
</style>
