<template>
    <div class="layout">
        <small>基础单选(mode="checkbox_1")</small>
        <checkbox :checkbox-list="list" mode="checkbox_1"></checkbox>
        <br>
        <small>基础单选(mode="checkbox_2")</small>
        <checkbox :checkbox-list="list" mode="checkbox_2"></checkbox>
        <br>
        <small>数据控制展示形态</small>
        <checkbox :checkbox-list="list_1" mode="checkbox_2"  @checkbox-item-click="handleClick"></checkbox>
        <br>
        <small>触发事件(checkbox-item-click)</small>
        <checkbox :checkbox-list="list" 
               mode="checkbox_2" 
               @checkbox-item-click="handleClick"
        ></checkbox>
        <br>
        <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
    </div>
</template>
<script>
    import Checkbox from '../components/checkbox.vue'
    import Toast from '../components/toast/index.js'

    export default{
        data() {
            return{
                list: [
                    {name: '小活宝', tip:'可用余额100.12'},
                    {name: '利是宝', tip:'可用余额100.12'},
                ],
                list_1: [
                    {name: '小活宝'},
                    {name: '禁用', disabled:true},
                    {name: '利是宝'}
                ],
                defaultIndex: -1
            }
        },
        created() {
            const self = this
            setTimeout(()=> {
                self.list_1 = [
                    {name: '小活宝'},
                    {name: '解除禁用'},
                    {name: '利是宝'}
                ];
                self.defaultIndex = 1;
            },2000)
        },
        methods: {
            back() {
                this.$router.push({
                    path: '/'
                })
            },
            handleClick(a) {
                Toast(`你选择了${a}`, 2000)
            }
        },
        components: {
            Checkbox
        }
    }
    
</script>
<style>
.layout{
    position: fixed;
    top:0;bottom:0;left:0;right: 0;
    overflow: scroll;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
}
.btn-blue{
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
