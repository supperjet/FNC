<template>
  <div class="layout">
      <div style="width:50%">
         <ncf-button ></ncf-button>
      </div>
      
      <br>
      <ncf-button :disabled="true"><div>disabled</div></ncf-button>
      <br>
      <ncf-button @btn-event="sendReq" :reqing="reqing">
        点击发送请求
      </ncf-button>
      <br>
      <ncf-button fixed></ncf-button>
      <ncf-button :mode="'normal'"><div style="color:#49f">normal</div></ncf-button>
  </div>
</template>
<script>
import ncfButton from '../components/button.vue'
export default {
  data() {
    return{
      reqing: false
    }
  },
  methods: {
    sendReq() {
      const self = this;
      this.reqing = true;
      console.log(this.reqing);
      setTimeout(()=> {
        self.reqing = false;
      },5000)
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
