<template>
    <div class="scroll-loading">
        <component :is="iconName"></component>
        <div>{{txt}}</div>
    </div>
</template>
<script>
    import ncfSpiner from './loading_icon.vue'
    import ncfCircle from './loading_icon_svg.vue'

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
            loadingIconType: {
                type: String,
                default: 'ncf-spiner'
            }
        },
        data() {
            return {
                iconName: this.loadingIconType
            }
        },
        components: {
            'ncf-spiner': ncfSpiner,
            'ncf-circle': ncfCircle
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
