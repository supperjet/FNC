<template>
    <div class="scroll-loading">
        <loading-icon :size="size"></loading-icon>
        <div>{{txt}}</div>
    </div>
</template>
<script>
    import LoadingIcon from './loading_icon.vue'

    const COMPONENT_NAME = 'scroll-loading'

    export default {
        name: COMPONENT_NAME,
        props: {
            txt: {
                type: String,
                default: '正在加载'
            },
            size: {
                type: Number | String,
                default: 19
            },
        },
        components: {
            LoadingIcon
        }
    }
</script>
<style scoped>
    .scroll-loading{
        color: #999;
        font-size: 12px;
    }
    .scroll-loading > div{
        display: inline-block;
        vertical-align: middle;
    }   
</style>
