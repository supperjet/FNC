<template>
    <div class="ncf-tab-nav flex border-bottom-1px">
        <slot></slot>
    </div>
</template>

<script>
    const COMPONENT_NAME = 'tab-nav'

    export default {
        name: COMPONENT_NAME,
        props: {
            activeItem: {
                type: String | Number,
                default: 0
            }
        }
    }
</script>

<style scoped>
    @import '../../../common/common.css';
    .ncf-tab-nav{
        position: relative;
        background-color: #fff;
    }
</style>
