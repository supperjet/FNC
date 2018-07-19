<template>
  <div class="layout">
    <small>slide默认内置图片, 只需传入图片地址即可</small>
    <div class="banner">
      <slide :data="banerlist"
             :initialIndex="bannerOption.initialIndex"
             :loop="bannerOption.loop"
             :autoPlay="bannerOption.autoPlay"
             :interval="bannerOption.interval"
             :threshold="bannerOption.threshold"
             :speed="bannerOption.speed"
             :direction="bannerOption.direction"
             :showDots="bannerOption.showDots"
      >
      </slide>
    </div>

    <small>不是图片的，可使用内置的slide-item自定义滑动内容</small>
    <div class="banner">
      <slide :data="items">
        <slide-item 
          class="item"
          v-for="(item, index) in items" :key="index"
        >
        {{item}}
        </slide-item>
      </slide>
    </div>

    <div class="control">
      <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
      <button type="button" name="button" @click="setInitialIndex" class="btn">设置默认项为1</button>
      <button type="button" name="button"  class="btn">循环播放</button>
      <button type="button" name="button"  class="btn">设置间隔时间</button>
      <button type="button" name="button"  class="btn">设置自动播放</button>
      <button type="button" name="button"  class="btn">设置播放速度</button>
      <button type="button" name="button" @click="play_V" class="btn">允许纵向播放</button>
      <button type="button" name="button" @click="setDots" class="btn">设置底部原点</button>
    </div>
  </div>
</template>
<script>

import Slide from '../components/slide/slide.vue'
import SlideItem from '../components/slide/slide-item'

export default {
  data() {
    return {
      items:[1,2,3,4,5,6,7,8,9,10],
      banerlist: [
        {
          url: 'http://www.nicaifu.com',
          image: 'https://p4.nicaifu.com/cms/201804/ef8dc0fd65696411cfdfa99c1295dda3.jpg'
        },
        {
          url: 'http://www.nicaifu.com',
          image: 'https://p4.nicaifu.com/cms/201804/f7f5c96b2bd5eabe8c3db0c1769e2f0e.jpg'
        },
        {
          url: 'http://www.nicaifu.com',
          image: 'https://p4.nicaifu.com/cms/201804/c9db3478919ba85ffe9e64f82e5a1e8c.jpg'
        },
        {
          url: 'http://www.nicaifu.com',
          image: 'https://p4.nicaifu.com/cms/201804/df0b4a98ad2666ad0914b3a76fbd49f3.jpg'
        }
      ],
      bannerOption: {
        initialIndex: 0,
        loop: true,
        autoPlay: true,
        interval: 3000,
        threshold: 0.3,
        speed: 400,
        direction: 'H',
        showDots: true
      }
    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    setInitialIndex(){
      this.bannerOption.initialIndex = 1;
    },
    setLoop() {
      this.bannerOption.loop = !this.bannerOption.loop;
    },
    setDots() {
      this.bannerOption.showDots = !this.bannerOption.showDots
    },
    play_V() {
      this.bannerOption.allowVertical = (this.bannerOption.allowVertical==='H'?'V':'H')
    }

  },
  components: {
    Slide,
    SlideItem
  }
}
</script>
<style scoped>
  .banner{
   overflow: hidden;
    height: 200px;
  }
  .btn{
    width: 80px;
    height: 40px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 5px;
    outline: none;
    color: #444;
    margin-bottom: 10px;
    font-size: 12px;
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
  }
  .control{
    padding-top:50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap:wrap;

  }
  .item{
    height: 300px;
    background: #ed4e39;
    color:#FFF;
    font-size: 40px;
  }
</style>
