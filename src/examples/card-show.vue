<template>
  <div class="layout">
      <card></card>
      <br>
      <card iconShow>
        <span slot="title">带图标</span>
      </card>
      <br>
      <card iconShow labelShow>
        <span slot="title">带图标 带箭头</span>
      </card>
      <br>
      <card iconShow labelShow tipShow>
        <span slot="title">带图标 带箭头 带箭头tip</span>
      </card>
      <br>
      <card iconShow labelShow>
        <span slot="title">替换整个右侧label</span>
        <a slot="label">撤销退出</a>
      </card>
      <br>
      <card iconShow labelShow needFooter
            @check-detail="aaa"
            @check-more="bbb"
      >
        <span slot="title">显示footer并触发事件</span>
      </card>
      <br>
       <card iconShow labelShow>
         <span slot="title">组合</span>
         <div slot="content">
           <cell 
              v-for="(item,index) in 3" :key="index"
              :need-border-btm="index!=2?true:false"
           ></cell>
         </div>
      </card>
      <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
  </div>
</template>
<script>
import Card from '../components/card.vue'
import Cell from '../components/cell.vue'
import Toast from '../components/toast/index.js'

export default {
  name: "",
  data() {
    return {

    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    aaa() {
      Toast('查看详情')
    },
    bbb() {
      Toast('查看更多')
    }
  },
  components: {
    Card,
    Cell
  }
}
</script>
<style scoped>
.layout{
  background: #eee;
}
.btn-blue{
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
