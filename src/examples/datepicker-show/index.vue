<template>
    <div class="layout">
        <div class="control">
            <button type="button" name="button" @click="date" class="btn">日期</button>
            <button type="button" name="button" @click="time" class="btn">时间</button>
            <button type="button" name="button" @click="datetime" class="btn">日期时间</button>
            <button type="button" name="button" @click="popDate" class="btn">弹出层datepicker</button>
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
        date() {
            this.$router.push({
                    path: '/datepicker/demo0'
            })
        },
        time() {
            this.$router.push({
                    path: '/datepicker/demo1'
            })
        },
        datetime() {
            this.$router.push({
                    path: '/datepicker/demo2'
            })
        },
        popDate() {
            this.$router.push({
                    path: '/datepicker/demo3'
            })
        }
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
