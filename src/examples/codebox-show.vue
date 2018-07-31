<template>
    <div class="layout">
        <br>
        <small>4位验证码输入框（num=4）</small>
        <ncf-code-box :auto-focus="auto"></ncf-code-box>
        <br>
        <small>6位验证码输入框（num=6）</small>
        <ncf-code-box :auto-focus="auto" num="6"></ncf-code-box>
        <br>
        <small>密码输入框（mask=true）</small>
        <ncf-code-box :auto-focus="auto" mask></ncf-code-box>
        <br>
        <small>自动弹出（autoFocus=true）</small>
        <ncf-code-box @input-done="complete"></ncf-code-box>
        <br>
        <small>监听输入完成事件（'input-done'）</small>
    </div>
</template>
<script>
    import ncfCodeBox from '../components/codebox.vue' 
    import Notice from '../components/ncfNotice/index.js'

    export default {
        data() {
            return {
                auto: false
            }
        },
        methods: {
            complete() {
                Notice('输入完成')
            }
        },
        components: {
            ncfCodeBox,
            Notice
        }
    }
</script>
<style>
    .layout {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
