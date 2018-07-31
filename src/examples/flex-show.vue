<template>
    <div class="container" ref="container">
        <ncf-flex each>
            <div class="ctn">
                <h1>上下拖动屏幕</h1>
                <h1>上下拖动屏幕</h1>
                <h1>上下拖动屏幕</h1>
                <h1>上下拖动屏幕</h1>
                <h1>上下拖动屏幕</h1>
                <h1>上下拖动屏幕</h1>
                <h1>上下拖动屏幕</h1>
            </div>
        </ncf-flex>
    </div>
</template>
<script>
    import ncfFlex from '../components/flex.vue'
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
    
        },
        components: {
            ncfFlex
        }
    }
</script>

<style>
    .container{
        /* position: fixed; */
        /* top: 100px; */
        /* left: 0;
        right: 0;
        bottom: 0; */
        background: #eee;
        overflow: auto;
    }
    .ctn{
        height: 100%;
        /* display: flex;
        align-items: center;
        justify-content: center; */
    }
</style>
