<template>
  <div class="layout">
      <small>基础button, 大小通过外层容器控制</small>
      <div style="width:50%">
         <ncf-button @btn-event="event_1"></ncf-button>
      </div>
      <br>

      <small>处于disable-active模式，不可点击</small>
      <div style="width:80%">
         <ncf-button :disable-active="disableActive" @btn-event="event_2"></ncf-button>
         <button @click="dissmiss">{{disableActive ? '解除禁用' : '开启禁用'}}</button>
      </div>
      <br>

      <div style="padding: 0 15px">
        <small>处于disabled模式，不可点击</small>
        <ncf-button :disabled="disabled">disabled</ncf-button>
        <button @click="dissmiss_1">{{disabled ? '解除' : '开启'}}</button>
      </div>
      <br>

      <div>
        <small>发送请求模式, 初始禁用， 解禁后点击发送请求</small>
        <ncf-button @btn-event="sendReq" :reqing="reqing" :disable-active="disableActive">点击发送请求</ncf-button>
        <button @click="dissmiss">{{disableActive ? '解除禁用' : '开启禁用'}}</button>
      </div>
      <br>
       
      <ncf-button fixed @click.native="goBack">返回</ncf-button>

      <small>normal状态的button</small>
      <ncf-button mode="normal">normal</ncf-button>
  </div>
</template>
<script>
import ncfButton from '../components/button.vue'
import Toast from '../components/toast/index.js'
export default {
  data() {
    return{
      reqing: false,
      disableActive: true,
      disabled: true
    }
  },

  methods: {
    sendReq() {
      const self = this;
      this.reqing = true;
      console.log(this.reqing);
      setTimeout(()=> {
        self.reqing = false;
        Toast('请求发送成功', 'bottom')
      },5000)
    },
    event_1() {
      Toast('你点击了我哦')
    },
    event_2() {
      Toast('disable active 模式')
    },
    dissmiss() {
      this.disableActive = !this.disableActive
    },
    dissmiss_1() {
      this.disabled = !this.disabled
    },
    goBack() {
      this.$router.push('/')
    }
  },
  components: {
    ncfButton
  }
}
</script>
<style scoped>
.layout{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f0f0f0;

}
</style>
