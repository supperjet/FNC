<template>
  <div>
    <!-- <test :test="info"></test> -->
  </div>
</template>
<script>
// import Test from './test.vue'
export default {
  data() {
    return {
      info: '--'
    }
  },
  beforeCreate() {
    //此时并没有做(data observer)和event/watch的配置，对数据的修改无效
    //此时处于vue实例（初始化后），但并未创建完成。
    console.log(this.$data); // undefined 所以这里无法做数据修改，因为访问不到数据
    // this.info = '11' //无效
  },
  created(){
    //vue实例创建完成（立即调用）：完成了（data observer）,属性和方法运算，watch/event事件回调，未挂载（没有插入到dom中）
    this.info='999' //有效果，
    console.log(this.$data); // {_ob_: Observer} 可以获取并且已经做了响应式绑定，所以此处做数据请求，完成后可以对数据重新赋值（因为可以获取到了）

    // const self = this;
    // setTimeout(()=>{
    //   self.info = 'change';
    // },2000)
  },
  components: {
    // Test
  }
}
</script>
<style scoped>
</style>
