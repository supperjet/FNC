<template>
    <div 
        v-show="index == $parent.currentActive"
        class="ncf-tab-container-item"
    >
        <slot></slot>
    </div>
</template>

<script>
    const COMPONENT_NAME = "ncf-tab-container-item"
    export default {
        name: COMPONENT_NAME,
        props: {
            index: {
                type: String | Number
            }
        }
    }
</script>

<style>
    .ncf-tab-container-item {
        flex-shrink: 0;
        width: 100%;
        color: #333;
        background: #fff;
    }
</style>
