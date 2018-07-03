<template>
  <div class="home">
    <h3>你财富基础组件</h3>
    <router-link tag="div" class="tab-item" to="/popup">
      <span class="tab-link">popup</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/baseaction">
      <span class="tab-link">action sheet</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/transparent">
      <span class="tab-link">trans</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/cell">
      <span class="tab-link">cell</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/panel">
      <span class="tab-link">panel</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/card">
      <span class="tab-link">card</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/loading">
      <span class="tab-link">loading</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/toast">
      <span class="tab-link">toast</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tab">
      <span class="tab-link">tab</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tabBar">
      <span class="tab-link">tabBar</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/dialog">
      <span class="tab-link">dialog</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/upload">
      <span class="tab-link">upload</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/input">
      <span class="tab-link">input</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/scroll">
      <span class="tab-link">scroll</span>
    </router-link>
    <!-- <router-link tag="div" class="tab-item" to="/sketeon">
      <span class="tab-link">sketchion</span>
    </router-link> -->
    <router-link tag="div" class="tab-item" to="/bulletin">
      <span class="tab-link">bulletin</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/slide">
      <span class="tab-link">slide</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/picker">
      <span class="tab-link">picker</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rect">
      <span class="tab-link">button</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/flex">
      <span class="tab-link">flex</span>
    </router-link>
     <router-link tag="div" class="tab-item" to="/datepicker">
      <span class="tab-link">datepicker</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tip">
      <span class="tab-link">tip</span>
    </router-link>
     <router-link tag="div" class="tab-item" to="/radio">
      <span class="tab-link">radio</span>
    </router-link>
     <router-link tag="div" class="tab-item" to="/checkbox">
      <span class="tab-link">checkbox</span>
    </router-link>
    <h3>你财富业务组件</h3>
    <router-link tag="div" class="tab-item" to="/moneyInput">
      <span class="tab-link">金额输入</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/slidenews">
      <span class="tab-link">滚动新闻</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/banklist">
      <span class="tab-link">银行列表选择</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/filed">
      <span class="tab-link">filed</span>
    </router-link>

  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
h3{
  text-align: center;
  color: #f76b3b;
  font-weight: 100;
  font-size: 20px;
}
.home{
  font-size: 0;
}
.tab-item{
  width: 33%;
  padding: 30px 0;
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
  color: #555;
  border: 1px solid #eee;
  border-radius: 4px;
  line-height: 40px;
  margin: 0;
  text-align: center;
  margin-bottom: 10px;
  margin-left: 1px;
}
.tab-item:hover{
  background-color: red;
}
</style>
