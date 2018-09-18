<template>
    <div class="ncf-menu-container flex border-bottom-1px">
        <slot></slot>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'ncf-menu-container'

    export default {
        name: COMPONENT_NAME,
        props: {
            activeIndex: {
                type: Number | String,
                default: -1
            }
        }
    }
</script>
<style scoped>
    @import '../../../common/common.css';

    .ncf-menu-container {
        position: relative;
        background: #fff;
    }
</style>
