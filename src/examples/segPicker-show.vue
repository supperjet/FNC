<template>
    <div class="layout">
        <button @click="showSeg_1">没有子页面</button>
        <button @click="showSeg_2">2级联布局</button>
        <button @click="showSeg_3">3级联布局</button>
        <seg-picker 
            ref="seg1" 
            :level="level"
            @go-main="(level!=1)&&handleGotoMain"
            @go-sub="(level!=1)&&handleGotoSub"
        >
            <div slot="seghead" class="seghead">级联选择框头部</div>
            <div slot="segfoot" class="segfoot">级联选择框底部</div>
            <div slot="main" class="main">
                <h1>我是main主界面</h1>
                <span>点任意一条去往子页面</span>
                <ul>
                    <li v-for="(item, index) in items" :key="index" @click="gotosub(item)" class="item">{{item}}</li>
                </ul>
            </div>
            <div slot="sub" class="sub">
               <h1>我是sub子界面</h1>
               <button @click="goBack">点我返回主页</button>
               <button @click="goTrub" v-if="level==3">点我前往三级子页面</button>
            </div>
            <div slot="trub" class="trub" v-if="level==3">
               <h1>我是三级子界面</h1>
               <button @click="gotosub">点我返回上一页</button>
            </div>
        </seg-picker>
    </div>
</template>
<script>
    import SegPicker from '../components/segPicker.vue'
    import Toast from '../components/toast/index.js'

    export default {
        data() {
            return {
                level: 2,
                items: []
            }
        },
        created() {
            
        },
        methods: {
            showSeg_1() {
                this.level = 1
                this.$refs.seg1.show();
                setTimeout(() => {
                    this.items = ['买入', '卖出', '收益', '支出']
                }, 2000)
            },
            showSeg_2() {
                this.level = 2
                this.$refs.seg1.show();
                setTimeout(() => {
                    this.items = ['买入', '卖出', '收益', '支出']
                }, 2000)
            },
            showSeg_3() {
                this.level = 3
                this.$refs.seg1.show();
                setTimeout(() => {
                    this.items = ['买入', '卖出', '收益', '支出']
                }, 2000)
            },
            goBack() {
                this.$refs.seg1.gotoMain()
            },
            gotosub(item) {
                console.log(item)
                this.$refs.seg1.gotoSub()
            },
            goTrub() {
                this.$refs.seg1.gotoTrub()
            },
            handleGotoMain(val) {
                Toast(`正在前往主页->${val}`, 'bottom')
            },
            handleGotoSub(val) {
                Toast(`正在前往子页->${val}`, 'bottom')
            }
        },
        components: {
            SegPicker
        }
    }
</script>
<style>
    ul{
        list-style:none;
        padding: 0;
    }
    .layout{
        text-align: center;
    }
    .seghead, .segfoot{
        text-align: center;
        padding: 10px 0;
        font-size: 12px;
    }
    .main, .sub, .trub{
        height: 300px;
        overflow: auto;
        background: #48e0e4;
        overflow: auto;
        text-align: center;
    }
    .main .item{
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .sub{
        background: #ff2e4c;
        color: #fff;
    }
    .trub{
        background: #ed0e39;
        color: #fff;
    }

</style>
