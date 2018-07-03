<template>
  <div class="slideshow">
      <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
      <button type="button" name="button" @click="showSlide" class="btn">显示侧滑</button>
      <router-view></router-view>
  </div>
</template>
<script>
  
export default {
  name: "",
  data() {
    return {
      isVisible: false,
      position: ''
    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    showSlide() {
      this.$router.push({
        path: '/transparent/trans'
      })
    }
  },
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
  .slideshow {
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
