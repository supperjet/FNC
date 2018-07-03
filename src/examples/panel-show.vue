<template>
  <div class="layout">
      <panel :needTip="true"></panel>
      <card>
        <div slot="title">
          卡片组合
        </div>
        <div slot="content">
          <panel></panel>
          <panel></panel>
          <panel></panel>
          <panel></panel>
          <cell :labelShow="false"></cell>
        </div>
      </card>
      <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
  </div>
</template>
<script>
import Panel from '../components/panel.vue'
import Card from '../components/card.vue'
import Cell from '../components/cell.vue'
export default {
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
  },
  components: {
    Panel,
    Card,
    Cell
  }
}
</script>
<style  scoped>
.layout{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  padding-top: 20px;
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
