<template>
    <div class="menu-container-item flex flex-1 flex-h flex-align-center flex-pack-center"
         :class="{
            'selected': $parent.activeIndex == index,
            'disabled': disabled
         }"
         @click="itemClick"
    >   
        <slot></slot>
        
        <template v-if="$parent.activeIndex != index">
            <span class="icon arrow-down">▼</span>
        </template>
        <template v-else>
            <span class="icon arrow-up">▲</span>
        </template>

    </div>
</template>

<script>
    const COMPONENT_NAME = 'menu-container-item'
    const EVENTS = {
        MENU_ITEM_CLICK: 'menu-item-click'
    }

    export default {
        props: {
            index: {
                type: Number | String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            itemClick() {
                this.$parent.$emit(EVENTS.MENU_ITEM_CLICK, this.index)
            }
        }
    }
</script>

<style scoped>
    @import "../../../common/common.css";

    .menu-container-item {
        padding: 12px 0px;
        margin: 0 0;
        color: #666;
        font-size: 14px;
        text-align: center;
    }
    .menu-container-item  .icon {
        padding-left: 5px;
        font-size: 10px;
        transform: scale(0.7);
        -webkit-transform: scale(0.7)
    }
    .menu-container-item.selected{
        color: #ed4e69;
    }
    .menu-container-item.disabled{
        color: #ddd;
        background: #ccc;
    }
</style>
