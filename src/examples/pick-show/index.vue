<template>
    <div class="layout">
        <div class="control">
            <button type="button" name="button" @click="singlePicker" class="btn">单列滚动</button>
            <button type="button" name="button" @click="multiPicker" class="btn">多列联动</button>
            <button type="button" name="button" @click="popPicker" class="btn">弹出层形式</button>
            <!-- <button type="button" name="button" @click="setSwipable" class="btn">设置是否滚动</button> -->
            <button type="button" name="button" @click="back" class="btn-blue">返回上一层</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
const COMPONENT_NAME = 'picker-show'
export default {
    name: COMPONENT_NAME,
    methods: {
        back() {
            this.$router.push({
                    path: '/'
            })
        },
        singlePicker() {
            this.$router.push({
                    path: '/picker/demo0'
            })
        },
        multiPicker() {
            this.$router.push({
                    path: '/picker/demo1'
            })
        },
        popPicker() {
            this.$router.push({
                    path: '/picker/demo2'
            })
        },
    }

}
</script>

<style>
.layout .control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
}
.btn{
  width: 100px;
  height: 50px;
  border: 1px solid #ddd;
  background-color: #fff;
  outline: none;
  color: #444;
  margin-bottom: 20px;
  border-radius: 4px;
}
.btn-blue{
  position: absolute;
  bottom: 0;
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
