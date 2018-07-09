<template>
    <div v-show="index === $parent.activeItem" class="ncf-tab-container-item-simple">
        <slot></slot>
    </div>
</template>

<script>
    const COMPONENT_NAME = "ncf-tab-container-item"
    export default {
        name: COMPONENT_NAME,
        props: {
            index: {
                type: Number
            }
        }
    }
</script>

<style>
    .ncf-tab-container-item-simple {
        width: 100%;
        height: 100%;
        display: inline-block;
        white-space: nowrap;
        box-sizing: border-box;
    }
</style>