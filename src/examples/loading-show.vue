<template>
  <div class="layout">
    <br>
    <loading-icon-svg></loading-icon-svg>
    <br>
    <loading-icon></loading-icon>
    <br>
    <scroll-loading></scroll-loading>
    <br>
    <scroll-loading loading-icon-type="ncf-circle"></scroll-loading>
    <br>
    <button @click="showLoading" class="btn-blue">显示</button>
    <button @click="back" class="btn-blue">返回上一层</button>
  </div>
</template>
<script>
import Loading from '../components/loading/index.js'
import ScrollLoading from '../components/loading/scroll_loading.vue'
import LoadingIconSvg from '../components/loading/loading_icon_svg'
import LoadingIcon from '../components/loading/loading_icon.vue'

const loading = new Loading()

export default {
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
    showLoading() {
      loading.show()
      setTimeout(() => {
        loading.hide()
      },2000)
    }
  },
  components: {
    Loading,
    LoadingIcon,
    ScrollLoading,
    LoadingIconSvg
  }
}
</script>
<style scoped>
  .layout{
    display: flex;
    flex-direction: column;
    /* justify-content:center; */
    align-items: center;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
  }
  .btn-blue{
    width: 100px;
    text-align: center;
    background: #49f;
    border: none;
    border-radius: 4px;
    padding: 10px;
    color: #fff;
    margin-top: 20px;
    outline: none;
  }
</style>
