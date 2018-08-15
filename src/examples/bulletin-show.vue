<template>
  <div class="layout">
    <bulletin :gap="bulletinOption.gap"
              :content="bulletinOption.content"
              :url="bulletinOption.url"
              :swipable="bulletinOption.swipable"
              :speed="bulletinOption.speed"
    >
    </bulletin>
    <br>
    <bulletin
        content="愿你三冬暖，愿你春不寒"  
    >
    </bulletin>
    <br>
     <bulletin
        content="愿你三冬暖，愿你春不寒" 
        :swipable="false" 
    >
    </bulletin>
    <div class="control">
      <button type="button" name="button" @click="setGap" class="btn">设置滚动文字间隔</button>
      <button type="button" name="button" @click="setSpeed" class="btn">设置速度</button>
      <button type="button" name="button" @click="setUrl" class="btn">设置跳转链接</button>
      <button type="button" name="button" @click="setSwipable" class="btn">设置是否滚动</button>
      <button type="button" name="button" @click="back" class="btn-blue">返回上一层</button>
    </div>

  </div>
</template>
<script>
import Bulletin from '../components/bulletin.vue'
const COMPONENT_NAME = 'bulletin-show'

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      bulletinOption: {
        gap: 100,
        content: '',
        speed: 1,
        url: '/',
        swipable: true
      }
    }
  },
  created() {
    setTimeout(() => {
      this.bulletinOption.content = '愿你三冬暖，愿你春不寒,愿你三冬暖，愿你春不寒,愿你三冬暖，愿你春不寒,'
    },1000)
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    setGap() {
      this.bulletinOption.gap = 300
    },
    setSpeed() {
      this.bulletinOption.speed = 2
    },
    setUrl() {
      this.bulletinOption.url = '/'
    },
    setSwipable() {
      this.bulletinOption.swipable = false
    }
  },
  components: {
    Bulletin
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
  background: #fff;

}
.layout .control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
}
.btn{
  width: 100px;
  height: 50px;
  border: 1px solid #ddd;
  background-color: #fff;
  outline: none;
  color: #444;
  margin-bottom: 20px;
  border-radius: 4px;
}
.btn-blue{
  position: absolute;
  bottom: 0;
  text-align: center;
  background: #49f;
  width: 100%;
  border: none;
  padding: 10px;
  color: #fff;
  margin-top: 20px;
  outline: none;
}
</style>
