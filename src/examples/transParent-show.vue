<template>
  <div class="slideshow">
      <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
      <button type="button" name="button" @click="fadeLeft" class="btn">fade-left</button>
      <button type="button" name="button" @click="up" class="btn">up</button>
      <button type="button" name="button" @click="down" class="btn">down</button>
      <button type="button" name="button" @click="left" class="btn">left</button>
      <button type="button" name="button" @click="right" class="btn">right</button>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      isVisible: false,
      position: 'fade-left'
    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    fadeLeft() {
      this.position = 'fade-left'
      this.routerPush()
    },
    up() {
      this.position = 'up'
      this.routerPush()
    },
    down() {
      this.position = 'down'
      this.routerPush()
    },
    left() {
      this.position = 'left'
      this.routerPush()
    },
    right() {
      this.position = 'right'
      this.routerPush()
    },
    routerPush() {
      this.$router.push({
        path: '/transparent/trans/?mode'+this.position,
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
