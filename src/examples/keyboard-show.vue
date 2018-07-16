<template>
    <div class="layout">
        <div style="margin:15px">
            <h4>纯数字类型</h4>
            <small>纯数字，用于密码、验证码等</small>
            <ncf-button @btn-event="showKB_1">唤起键盘</ncf-button>
        </div>
         <div style="margin:15px">
            <h4>金额类型</h4>
            <small>带小数点、确认键，用于金额和价格输入等</small>
            <ncf-button @btn-event="showKB_2">唤起键盘</ncf-button>
        </div>
         <div style="margin:15px">
            <h4>数字乱序</h4>
            <ncf-button @btn-event="showKB_3">唤起键盘</ncf-button>
        </div>
        <p class="kb-ctn"><span>NUM:</span><span>{{content_1}}</span></p>
        <key-board ref="keyboard_1" :mode="mode" @enter="showContent" @delete="showContent" @confirm="confirmCtn"></key-board>
        <key-board ref="keyboard_2" :mode="mode" disorder @enter="showContent" @delete="showContent" @confirm="confirmCtn"></key-board>
    </div>
</template>
<script>
    import KeyBoard from '../components/keyboard.vue'
    import NcfButton from '../components/button.vue'
    import Toast from '../components/toast/index.js'

    export default {
        data() {
            return {
                mode: '',
                content_1: '',
            }
        },
        methods: {
            showKB_1() {
                this.mode = ''
                this.$refs.keyboard_1.show()
            },
            showKB_2() {
                this.mode = 'powerful'
                this.$refs.keyboard_1.show()
            },
            showKB_3() {
                this.mode = 'powerful'
                this.$refs.keyboard_2.show()
            },
            showContent(ctn) {
                this.content_1 = ctn
            },
            confirmCtn(ctn) {
                Toast(`你输入的值是${ctn}`)
            }
        },
        components: {
            KeyBoard,
            NcfButton,
            Toast
        }
    }
</script>
<style>
    .kb-ctn{
        margin-top: 80px;
        font-size: 25px;
        text-align: center;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>
