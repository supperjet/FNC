<template>
  <div class="home">
    <h2>你财富基础组件</h2>
    <panel is-active>
      <h4 slot="title">弹出层</h4>
      <div>
        <router-link tag="div" class="tab-item" to="/popup">
          <cell tip-show need-border-btm><span class="tab-link">popup</span><span slot="tips">弹出层</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/baseaction">
          <cell need-border-btm><span class="tab-link">action sheet</span><span slot="tips">基础action sheet</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/dialog">
          <cell tip-show need-border-btm><span class="tab-link">dialog</span><span slot="tips">对话框</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/picker">
          <cell tip-show need-border-btm><span class="tab-link">picker</span><span slot="tips">选择器</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/datepicker">
          <cell tip-show need-border-btm><span class="tab-link">datepicker</span><span slot="tips">日期选择</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/segpicker">
          <cell tip-show need-border-btm><span class="tab-link">segPicker</span><span slot="tips">级联选择框</span></cell>
        </router-link>
         <router-link tag="div" class="tab-item" to="/dropdown">
          <cell tip-show need-border-btm><span class="tab-link">dropdown</span><span slot="tips">下拉选择框</span></cell>
        </router-link>
      </div>
    </panel>
    <br>
    <panel is-active>
      <h4 slot="title">视图布局</h4>
      <div>
        <router-link tag="div" class="tab-item" to="/cell">
          <cell tip-show need-border-btm><span class="tab-link">cell</span><span slot="tips">单元格</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/panel">
          <cell tip-show need-border-btm><span class="tab-link">panel</span><span slot="tips">面板</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/card">
          <cell tip-show need-border-btm><span class="tab-link">card</span><span slot="tips">卡片</span></cell>
        </router-link>
      </div>
    </panel>
    <br>
    <panel is-active>
      <h4 slot="title">优化体验</h4>
      <div>
        <router-link tag="div" class="tab-item" to="/flex">
          <cell tip-show need-border-btm><span class="tab-link">flex</span><span slot="tips">上下滑动的弹性动画</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/transparent">
          <cell tip-show need-border-btm><span class="tab-link">trans</span><span slot="tips">侧滑</span></cell>
        </router-link>
      </div>
    </panel>
    <br>
    <panel is-active>
      <h4 slot="title">tab & slide & scroll</h4>
      <div>
        <router-link tag="div" class="tab-item" to="/tabBar">
          <cell tip-show need-border-btm><span class="tab-link">tabBar</span><span slot="tips">tab 切换条</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/tabContainer">
          <cell tip-show need-border-btm><span class="tab-link">tabContainer</span><span slot="tips">tab 容器</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/tab">
          <cell need-border-btm><span class="tab-link">tab</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/slide">
          <cell tip-show need-border-btm><span class="tab-link">slide</span><span slot="tips">幻灯片</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/scroll">
          <cell tip-show need-border-btm><span class="tab-link">scroll</span><span slot="tips">上拉加载下拉刷新</span></cell>
        </router-link>
      </div>
    </panel>
    <br>
    <panel is-active>
      <h4 slot="title">原生类</h4>
      <div>
        <router-link tag="div" class="tab-item" to="/input">
            <cell tip-show need-border-btm><span class="tab-link">input</span><span slot="tips">输入</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/button">
          <cell tip-show need-border-btm><span class="tab-link">button</span><span slot="tips">按钮</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/checkbox">
          <cell tip-show need-border-btm><span class="tab-link">checkbox</span><span slot="tips">多选</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/radio">
          <cell tip-show need-border-btm><span class="tab-link">radio</span><span slot="tips">单选</span></cell>
        </router-link>
      </div>
    </panel>
    <br>
    <panel is-active>
      <h4 slot="title">金融专用</h4>
      <router-link tag="div" class="tab-item" to="/moneyInput">
        <cell tip-show need-border-btm><span class="tab-link">amount</span><span slot="tips">金额输入</span></cell>
      </router-link>
      <router-link tag="div" class="tab-item" to="/banklist">
        <cell tip-show need-border-btm><span class="tab-link">banklist</span><span slot="tips">银行列表选择</span></cell>
      </router-link>
      <router-link tag="div" class="tab-item" to="/number">
        <cell tip-show need-border-btm><span class="tab-link">number</span><span slot="tips">数字</span></cell>
      </router-link>
      <router-link tag="div" class="tab-item" to="/keyboard">
        <cell tip-show need-border-btm><span class="tab-link">keyboard</span><span slot="tips">键盘</span></cell>
      </router-link>
      <router-link tag="div" class="tab-item" to="/codebox">
        <cell tip-show need-border-btm><span class="tab-link">codebox</span><span slot="tips">密码框</span></cell>
      </router-link>
      <router-link tag="div" class="tab-item" to="/price">
        <cell tip-show need-border-btm><span class="tab-link">price</span><span slot="tips">价格拖动选择</span></cell>
      </router-link>
    </panel>
    <br>
    <panel is-active>
      <h4 slot="title">小工具</h4>
      <div>
        <router-link tag="div" class="tab-item" to="/louver">
          <cell tip-show need-border-btm><span class="tab-link">DataWindow</span><span slot="tips">数据窗</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/calendar">
          <cell tip-show need-border-btm><span class="tab-link">calendar</span><span slot="tips">日历</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/loading">
          <cell tip-show need-border-btm><span class="tab-link">loading</span><span slot="tips">加载</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/toast">
          <cell tip-show need-border-btm><span class="tab-link">toast</span><span slot="tips">轻提示</span></cell>
        </router-link>
         <router-link tag="div" class="tab-item" to="/noticeBar">
          <cell tip-show need-border-btm><span class="tab-link">noticeBar</span><span slot="tips">全局通知</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/sticky">
          <cell tip-show need-border-btm><span class="tab-link">sticky</span><span slot="tips">吸顶工具</span></cell>
        </router-link>
        <!-- <router-link tag="div" class="tab-item" to="/step">
          <cell tip-show need-border-btm><span class="tab-link">stepBar</span><span slot="tips">步骤条</span></cell>
        </router-link> -->
        <router-link tag="div" class="tab-item" to="/bulletin">
          <cell tip-show need-border-btm><span class="tab-link">bulletin</span><span slot="tips">公告</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/tip">
          <cell tip-show need-border-btm><span class="tab-link">tip</span><span slot="tips">气泡提示</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/progressbar">
          <cell tip-show need-border-btm><span class="tab-link">progress bar</span><span slot="tips">进度条</span></cell>
        </router-link>
        <router-link tag="div" class="tab-item" to="/badge">
          <cell tip-show need-border-btm><span class="tab-link">badge</span><span slot="tips">徽章</span></cell>
        </router-link>
      </div>
    </panel>
    
    <h2></h2>
   
    <!-- <router-link tag="div" class="tab-item" to="/upload">
      <span class="tab-link">upload</span>
    </router-link> -->
  
    <!-- <h2>你财富业务组件</h2>
    <router-link tag="div" class="tab-item" to="/repaymode">
      <cell need-border-btm><span class="tab-link">回款方式</span></cell>
    </router-link> -->
    <!-- <router-link tag="div" class="tab-item" to="/filed">
      <cell need-border-btm><span class="tab-link">filed</span></cell> -->
    <!-- </router-link> -->

  </div>
</template>
<script>
import Cell from '../components/cell.vue'
import Panel from '../components/panel.vue'
export default {
  components: {
    Cell,
    Panel
  }
}
</script>
<style scoped>
.home{
  text-align: center;
  background: #f0f0f0;
}
h2{
  padding: 15px 0;
  color: #333
}
h4{
  text-align: center;
  color: #f76b3b;
  font-weight: 400;
  font-size: 18px;
}
</style>
