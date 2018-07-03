<template>
  <div class="layout">
    <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
    <button type="button" name="button" @click="showAction" class="btn">基础</button>
    <button type="button" name="button" @click="hideFooter" class="btn">消除底部和头部</button>
    <button type="button" name="button" @click="hideCancelBtn" class="btn">消除关闭按钮</button>
    <base-action-sheet ref="baseAction" 
                       :is-need-header="isNeedHeader"
                       :is-need-footer="isNeedFooter" 
                       :is-need-header-cancel="isNeedHeaderCancel"
    ></base-action-sheet>
  </div>
</template>
<script>
import BaseActionSheet from '../components/baseActionSheet.vue'
export default {
  name: "",
  data() {
    return{
      isNeedHeader: true,
      isNeedFooter: true,
      isNeedHeaderCancel: true
    }
  },
  mounted() {
    this.$baseActionSheet = this.$refs.baseAction
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    showAction() {
      this.$baseActionSheet.show()
      this.isNeedFooter = true
      this.isNeedHeaderCancel = true
    },
    hideFooter() {
      this.$baseActionSheet.show()
      this.isNeedFooter = false
      this.isNeedHeaderCancel = true
      this.isNeedHeader = false
    },
    hideCancelBtn() {
      this.$baseActionSheet.show()
      this.isNeedFooter = true
      this.isNeedHeaderCancel = false
    },

  },
  components: {
    BaseActionSheet
  }
}
</script>
<style scoped>
.layout{
  position: fixed;
  top:0;
  left:0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn{
  width: 100px;
  height: 50px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
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
