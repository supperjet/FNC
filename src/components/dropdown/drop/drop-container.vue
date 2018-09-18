<template>
    <div class="ncf-drop-container" v-show="activeIndex != -1">
        <div class="content">
            <slot></slot>
        </div>
        <div class="mask" @click="maskClick"></div>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'ncf-drop-container'
    const EVENTS = {
        MASK_CLICK: 'mask-click'
    }
    export default {
        name: COMPONENT_NAME,
        props: {
            activeIndex: {
                type: Number | String,
                default: -1
            }
        },
        methods: {
            maskClick() {
                this.$emit(EVENTS.MASK_CLICK)
            }
        }
    }
</script>
<style scoped>
    .ncf-drop-container{
        position: absolute;
        top: 44px; left: 0; right: 0; bottom: 0;
        z-index: 6;
        overflow: hidden;
    }
    .ncf-drop-container .content{
        position: absolute;
        top: 0; left:0; right: 0;
        background: #fff;
        z-index: 5;
        animation: slideIn 0.3s;
        -webkit-animation: slideIn 0.3s;
    }
    .ncf-drop-container .mask {
        position: absolute;
        top:0; bottom:0; left:0; right:0;
        background: rgba(0, 0, 0, .3);
        z-index: 4;
        animation: fade 0.3s;
        -webkit-animation: fade 0.3s;
    }
    @keyframes slideIn {
        from{ transform: translateY(-100%)}
        to{ transform: translateY(0%)}
    }
    @-webkit-keyframes slideIn {
        from{ transform: translateY(-100%)}
        to{ transform: translateY(0%)}
    }
    @keyframes fade {
        from { opacity: 0;}
        to { opacity: 1; }
    }
    @-webkit-keyframes fade {
        from { opacity: 0;}
        to { opacity: 1; }
    }
</style>
