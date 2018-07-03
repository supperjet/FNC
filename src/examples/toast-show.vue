<template>
  <div class="layout">
    <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
    <button type="button" name="button" @click="showToast1" class="btn">基础toast</button>
    <button type="button" name="button" @click="showToast2" class="btn">显示在底部</button>
    <button type="button" name="button" @click="showToast3" class="btn">设置时间为5s</button>
    <!-- <button type="button" name="button" @click="showToast4" class="btn">带弹出层</button> -->
    <br>
    <br>
    <br>
    <p>使用方法</p>
    <pre>
      Toast('输入中请稍后...')
      Toast('显示在底部','bottom')
      Toast('5s后消失',5000)
    </pre>
  </div>
</template>
<script>
import Toast from '../components/toast/index.js'
export default {
  data() {
    return{
      
    }
  },
  mounted() {
    this.$toast = this.$refs.toast;
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    showToast1() {
      Toast('输入中请稍后...')
    },
    showToast2() {
      Toast('显示在底部','bottom')
    },
    showToast3() {
      Toast('5s后消失',5000)
    }
  },
  components: {
    Toast
  }
}
</script>
<style scoped>
.btn{
  width: 100px;
  height: 40px;
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
  padding: 15px 0;
  align-items: center;
  flex-direction: column;
}
</style>
