<template>
  <div class="slide-news">
    <div class="news-head">
      <slot name="head">
        News
      </slot>
    </div>
    <div class="news-content">
       <ncf-slide
       :direction="slideOption.direction"
       :speed="slideOption.speed"
       :showDots="slideOption.showDots"
       :interval="slideOption.interval"
       >
          <ncf-slide-item
            class="newsItem"
            v-for="(item, index) in news" :key="index"
            :item="item"
          >
            <slot>
                {{item.title}}
            </slot>
          </ncf-slide-item>
       </ncf-slide>
    </div>
  </div>
</template>
<script>

import ncfSlide from '../components/slide/slide.vue'
import ncfSlideItem from '../components/slide/slide-item.vue'

export default {
  data() {
    return {
      slideOption: {
        direction: 'V',
        speed: 2000,
        showDots: false,
        interval: 1000,
      },
      news:[
        {
          title: '浮世万千, 吾爱有三，日、月、卿.日为朝，月为暮，卿为朝朝暮暮。',
        },
        {
          title: '愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴',
        }
      ]
    }
  },
  components: {
    ncfSlide,
    ncfSlideItem
  }
}
</script>
<style scoped>
  .slide-news{
    /*width: 100%;*/
    height: 50px;
    /*overflow: hidden;*/
    /*margin: 0 auto;*/
    border: 1px solid #eee;
    border-radius: 25px;
    /*box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);*/
    font-size: 0;
  }
  .slide-news > div {
    display: inline-block;
    font-size: 12px;
    height: 100%;
    white-space: nowrap;
  }
  .slide-news .news-head{
    width: 15%;
    text-align: center;
    vertical-align: bottom;
    line-height: 50px;
    border-right: 1px solid #eee;
  }
  .slide-news .news-content{
    width: 80%;
    overflow: hidden;
  }
  .slide-news .news-content .ncf-slide-item{
    width: 100%;
    text-align:left;
    /*background-color: #f0f0f0;*/
    padding: 0 10px;
    /*line-height: 50px;*/
  }
</style>
