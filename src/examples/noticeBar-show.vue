<template>
    <div class="layout">
        <button @click="show">normal</button>
        <br>
        <button @click="showSuccess">success</button>
        <br>
        <button @click="showWarn">warn</button>
        <br>
        <button @click="showFail">fail</button>
         <br>
        <button @click="showTime">5后隐藏</button>
         <br>
        <button @click="showAuto">不自动隐藏</button>
        <br>
        <button @click="showColor">自定义颜色</button>
    </div>
</template>
<script>
    import Notice from '../components/ncfNotice/index.js'

    export default {
        data() {
            return {
                type: 'normal',
                auto: false
            }
        },
        methods: {
            show() {
                Notice('你财富全局通知组件')
            },
            showSuccess() {
                Notice('你财富全局通知组件', 'success')
            },
            showWarn() {
                Notice('你财富全局通知组件', 'warn')
            },
            showFail() {
                 Notice('你财富全局通知组件', 'fail')
            },
            showTime() {
                Notice('你财富全局通知组件', 'normal', 5000)
            },
            showAuto() {
                Notice('你财富全局通知组件', 'normal', null, false)
            },
            showColor() {
                 Notice('你财富全局通知组件', '#f88899')
            }
        },
        components: {
            Notice
        }
    }
</script>
<style>
    .layout {
        position: fixed;
        top:0;bottom:0;left:0;right: 0;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
    }

</style>
