<template>
  <div class="home">
     <cell :label-show="false" need-border-btm><h3>你财富基础组件</h3></cell>
    <router-link tag="div" class="tab-item" to="/popup">
      <cell tip-show need-border-btm><span class="tab-link">popup</span><span slot="tips">弹出层</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/baseaction">
      <cell need-border-btm><span class="tab-link">action sheet</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/transparent">
       <cell tip-show need-border-btm><span class="tab-link">trans</span><span slot="tips">侧滑</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/cell">
      <cell tip-show need-border-btm><span class="tab-link">cell</span><span slot="tips">单元格</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/panel">
      <cell tip-show need-border-btm><span class="tab-link">panel</span><span slot="tips">面板</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/card">
      <cell tip-show need-border-btm><span class="tab-link">card</span><span slot="tips">卡片</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/loading">
      <cell tip-show need-border-btm><span class="tab-link">loading</span><span slot="tips">加载</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/toast">
      <cell tip-show need-border-btm><span class="tab-link">toast</span><span slot="tips">轻提示</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tabBar">
      <cell tip-show need-border-btm><span class="tab-link">tabBar</span><span slot="tips">tab 切换条</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tabContainer">
      <cell tip-show need-border-btm><span class="tab-link">tabContainer</span><span slot="tips">tab 容器</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tab">
      <cell need-border-btm><span class="tab-link">tab</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/dialog">
      <cell tip-show need-border-btm><span class="tab-link">dialog</span><span slot="tips">对话框</span></cell>
    </router-link>
    <!-- <router-link tag="div" class="tab-item" to="/upload">
      <span class="tab-link">upload</span>
    </router-link> -->
    <router-link tag="div" class="tab-item" to="/input">
      <cell tip-show need-border-btm><span class="tab-link">input</span><span slot="tips">输入</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/scroll">
      <cell tip-show need-border-btm><span class="tab-link">scroll</span><span slot="tips">上拉加载下拉刷新</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/bulletin">
      <cell tip-show need-border-btm><span class="tab-link">bulletin</span><span slot="tips">公告</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/slide">
      <cell tip-show need-border-btm><span class="tab-link">slide</span><span slot="tips">幻灯片</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/picker">
      <cell tip-show need-border-btm><span class="tab-link">picker</span><span slot="tips">选择器</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rect">
      <cell tip-show need-border-btm><span class="tab-link">button</span><span slot="tips">按钮</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/flex">
      <cell tip-show need-border-btm><span class="tab-link">flex</span><span slot="tips">上下滑动的弹性动画</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/datepicker">
      <cell tip-show need-border-btm><span class="tab-link">datepicker</span><span slot="tips">日期选择</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tip">
      <cell tip-show need-border-btm><span class="tab-link">tip</span><span slot="tips">气泡提示</span></cell>
    </router-link>
     <router-link tag="div" class="tab-item" to="/radio">
      <cell tip-show need-border-btm><span class="tab-link">radio</span><span slot="tips">单选</span></cell>
    </router-link>
     <router-link tag="div" class="tab-item" to="/checkbox">
      <cell tip-show need-border-btm><span class="tab-link">checkbox</span><span slot="tips">多选</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/number">
      <cell tip-show need-border-btm><span class="tab-link">number</span><span slot="tips">数字</span></cell>
    </router-link>
    
    <cell :label-show="false" need-border-btm><h3>你财富业务组件</h3></cell>
    <router-link tag="div" class="tab-item" to="/moneyInput">
      <cell need-border-btm><span class="tab-link">金额输入</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/slidenews">
      <cell need-border-btm><span class="tab-link">滚动新闻</span></cell>
    </router-link>
    <router-link tag="div" class="tab-item" to="/banklist">
      <cell need-border-btm><span class="tab-link">银行列表选择</span></cell>
    </router-link>
    <!-- <router-link tag="div" class="tab-item" to="/filed">
      <cell need-border-btm><span class="tab-link">filed</span></cell>
    </router-link> -->
  </div>
</template>
<script>
import Cell from '../components/cell.vue'
export default {
  components: {
    Cell
  }
}
</script>
<style scoped>
h3{
  text-align: center;
  color: #f76b3b;
  font-weight: 100;
  font-size: 20px;
}
</style>
