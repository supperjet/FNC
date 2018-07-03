<template>
  <div class="popshow">
      <!-- <bulletin></bulletin> -->
      <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
      <button type="button" name="button" @click="showPopupBottom" class="btn">底部</button>
      <button type="button" name="button" @click="showPopupCenter" class="btn">中间</button>
      <button type="button" name="button" @click="showPopupTop" class="btn">顶部</button>
      <button type="button" name="button" @click="showPopupLeft" class="btn">左侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <button type="button" name="button" @click="showPopupRight" class="btn">右侧</button>
      <popup :position="bottom" ref="popup1" prevent-scroll prevent-scroll-exclude=".squre">
        <div class="squre">
           <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
           <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
           <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
           <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
          <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
           <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
           <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
           <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
        </div>
      </popup>
      <popup :position="center" ref="popup2">
        <div class="squre">
          <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
        </div>
      </popup>
      <popup :position="top" ref="popup3">
        <div class="squre">
          <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
        </div>
      </popup>
      <popup :position="left" ref="popup4">
        <div class="squre">
          <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
        </div>
      </popup>
      <popup :position="right" ref="popup5" >
        <div class="squre">
          <h3>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h3>
          <h2>愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞，愿你一路有良人相伴！:-D</h2>
        </div>
      </popup>
  </div>
</template>
<script> 
import Popup from '../components/ncfPop/ncfPopup.vue'
  
export default {
  name: "",
  data() {
    return {
      isVisible: false,
      bottom: 'bottom',
      top: 'top',
      center: 'center',
      left: 'left',
      right: 'right'
    }
  },
  computed: {
    pos() {
      return this.position
    }
  },
  mounted() {
    this.$popup1 = this.$refs.popup1;
    this.$popup2 = this.$refs.popup2;
    this.$popup3 = this.$refs.popup3;
    this.$popup4 = this.$refs.popup4;
    this.$popup5 = this.$refs.popup5;
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    show() {
      this.$popup.show()
    },
    showPopupBottom() {
      this.$popup1.show()
    },
    showPopupCenter() {
      this.$popup2.show()
    },
    showPopupTop() {
      this.$popup3.show()
    },
    showPopupLeft() {
      this.$popup4.show()
    },
    showPopupRight() {
      this.$popup5.show()
    }
  },
  components: {
    Popup
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
    display: block;
  }
  .btn-blue{
    background: #49f;
    color: #fff;
    border: none;
  }
  .popshow {
    /* position: fixed; */
    /* top:0;
    left:0;
    bottom: 0;
    right: 0; */
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .squre{
    text-align:center;
    background-color: #fff;
  }
</style>
