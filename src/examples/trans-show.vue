<template>
  <trans :mode="mode">
    <div class="trans-show">
      <button type="button" name="button" @click="back" class="btn btn-blue"><</button>
        <div style="display:flex;algin-items:center;justify-content:center">
          <h1>侧滑组件</h1>
        </div>
    </div>
  </trans>
</template>
<script>
import Trans from '../components/trans.vue'
export default {
  props: {
    mode: {
      type: String,
      default: 'fade-left'
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
    background-color: rgba(0,0,0,1);
    color:#fff;
}
.btn{
  background-color: #fff;
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
