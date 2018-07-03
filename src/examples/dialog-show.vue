<template>
  <div class="layout">
      <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
      <button type="button" name="button" @click="showBaseDialog" class="btn">只有一个按钮(alert)</button>
      <button type="button" name="button" @click="showTwoBtn" class="btn">双按钮(confirm)</button>
      <button type="button" name="button" @click="showTwoBtn_1" class="btn">不要title</button>
      <button type="button" name="button" @click="showTwoBtn_4" class="btn">不要buttons</button>
      <button type="button" name="button" @click="showTwoBtn_2" class="btn">禁止mask点击关闭</button>
      <button type="button" name="button" @click="showTwoBtn_3" class="btn">回调函数</button>
  </div>
</template>
<script> 
import Dialog from '../components/dialog/index.js'
import Toast from '../components/toast/index.js' 
import Loading from '../components/loading/index.js'

const loading = new Loading() 

export default {
  name: "",
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
   
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    showBaseDialog() {
      Dialog({
        mode: 'alert',
        title: '温馨提示',
        content:'浮世万千, 吾爱有三，日、月、卿浮世万千, 吾爱有三，日、月、卿。浮世万千, 吾爱有三，日、月、卿。',
        confirmTxt: '我知道了',
        ok: function() {
          Toast('你点击了确定按钮', 'bottom')
        }
      })
    },
    showTwoBtn() {
      Dialog({
        mode: 'confirm',
        title: '温馨提示',
        content:'浮世万千, 吾爱有三，日、月、卿浮世万千, 吾爱有三，日、月、卿。浮世万千, 吾爱有三，日、月、卿。',
        ok: function() {
          Toast('你点击了确定按钮', 'bottom')
        }
      })
    },
    showTwoBtn_1(){
      Dialog({
        mode: 'alert',
        title: '',
        content:'浮世万千, 吾爱有三，日、月、卿浮世万千, 吾爱有三，日、月、卿。浮世万千, 吾爱有三，日、月、卿。',
        ok: function() {
          Toast('你点击了确定按钮', 'bottom')
        }
      })
    },
    showTwoBtn_2() {
      Dialog({
        mode: 'confirm',
        title: '点击mask无法关闭',
        maskable: false,
        content:'浮世万千, 吾爱有三，日、月、卿浮世万千, 吾爱有三，日、月、卿。浮世万千, 吾爱有三，日、月、卿。',
        ok: function() {
          Toast('你点击了确定按钮', 'bottom')
        }
      })
    },
    showTwoBtn_3() {
      Dialog({
        mode: 'confirm',
        title: '回调函数',
        content:'浮世万千, 吾爱有三，日、月、卿浮世万千, 吾爱有三，日、月、卿。浮世万千, 吾爱有三，日、月、卿。',
        ok: function() {
          loading.show()
          setTimeout(() => {
            loading.hide()
            Toast('加载完成...','bottom')
          }, 3000)
        }
      })
    },
    showTwoBtn_4() {
       Dialog({
        mode: 'confirm',
        title: '回调函数',
        needBtns: false,
        content:'浮世万千, 吾爱有三，日、月、卿浮世万千, 吾爱有三，日、月、卿。浮世万千, 吾爱有三，日、月、卿。',
        ok: function() {
          loading.show()
          setTimeout(() => {
            loading.hide()
            Toast('加载完成...')
          }, 3000)
        }
      })
    }
  },
  components: {
    Dialog,
    Toast
  }
}
</script>
<style scoped>
  .btn{
    width: 100px;
    height: 50px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 5px;
    outline: none;
    color: #444;
    margin-bottom: 10px;
  }
  .btn-blue{
    background: #49f;
    color: #fff;
    border: none;
  }
  .layout {
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
