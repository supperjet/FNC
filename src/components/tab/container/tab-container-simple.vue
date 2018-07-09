<template>
    <div class="ncf-tab-container-normal" ref="container">
        <div class="ncf-tab-container-normal-wrap" ref="containerWrap">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'tab-container-item-normal'
    
    export default {
        name: COMPONENT_NAME,
        props: {
            activeItem: {
                type: Number,
                default: 0
            }
        }
    }
</script>
<style>
    .ncf-tab-container-normal {
        position: relative;
        overflow: hidden;
    }
    .ncf-tab-container-normal-wrap{
        
    }
</style>
