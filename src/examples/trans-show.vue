<template>
  <trans :type="name" :bgColor="color" class="trans-show">
    <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
    <div class="">
      侧滑组件
    </div>
  </trans>
</template>
<script>
import Trans from '../components/trans.vue'
export default {
  data() {
    return {
      name: 'zhou',
      color: "rgba(0,0,0,1)"
    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/transparent'
      })
    }
  },
  components: {
    Trans
  }
}
</script>
<style scoped>
.trans-show{
  position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(255,255,255,.6);
}
.btn{
  /*width: 100px;
  height: 50px;*/
  /*border: 1px solid #ddd;*/
  background-color: #fff;
  /*border-radius: 5px;*/
  outline: none;
  color: #444;
  margin-bottom: 10px;
}
.btn-blue{
  background: #49f;
  color: #fff;
  border: none;
}
</style>
