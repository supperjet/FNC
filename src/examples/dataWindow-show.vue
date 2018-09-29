<template>
    <div class="louver">
        <small>
        【data-window】：是一个列表数据截取组件，它支持动态的截取数据，然后提供给UI渲染。组件内部只是个简单的slot，
         在内部处理好数据后，会将数据挂载到slot上，传给外界的模板。外界的模板包裹在template中，通过slot-scope，
         调用处理好的数据，以达到UI样式自定义的效果。通过动态的修改start和end的值，能够让模板动态的获取所需渲染的数据，
         该功能可以作为虚拟列表的基础功能。
        </small>
        <br>
        <div class="data-cloum">
            <div class="cloum-1">
              <ul>
                <li v-for="(item, index) in dataList" :key="index">{{item}}</li>
              </ul>
            </div>
            <data-window :data-list="dataList" :wind="wind">
              <template slot-scope="list">
                  <ul>
                      <li v-for="(item, index) in list.data" :key="index">{{item}}</li>
                  </ul>
              </template>
            </data-window>
        </div>
        <br>
        <div class="group">
            <small>切换窗口的范围</small>
            <button @click="dec">-1</button>
            <button @click="add">+1</button>
        </div>
    </div>
</template>
<script>
    import DataWindow from '../components/list/dataWindow.vue'

    const windowMoveSpeed = 1

    export default {
        data() {
            return {
                wind: [0, 5],
                dataList: [1,2,3,4,5,6,7,8,9,10,11]
            }
        },
        methods: {
          add() {
            var start = this.wind[0] + windowMoveSpeed
            var end = this.wind[1] + windowMoveSpeed
            this.wind = [start, end]
          },
          dec() {
            var start = this.wind[0] - windowMoveSpeed
            var end = this.wind[1] - windowMoveSpeed
            this.wind = [start, end]
          }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        components: {
            DataWindow
        }
    }
</script>

<style>
    .louver{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .data-cloum{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    button{
      background: #49f;
      outline: none;
      /* border: none; */
    }
    ul{
      list-style: none;
    }

</style>
