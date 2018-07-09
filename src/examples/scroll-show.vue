<template>
    <div>
        <small>纵向滚动</small>
        <div class="container">
                <scroll
                    ref="scroll"
                    :data="list"
                    :options="scrollOptions2"
                    :listenScroll="true"
                    @pulling-down="refreshData"
                    @pulling-up="getData"
                    @scroll="listenScroll"
                >
                </scroll>
        </div>
        <!-- <small>横向滚动</small>
        <div class="container_H">
             <scroll
                    ref="scroll_H"
                    direction="horizontal"
            >
                <ul class="list-wrapper">
                        <li v-for="(item, index) in items" class="list-item" :key="index">{{ item }}</li>
                </ul>
            </scroll> -->
        </div>
    </div>
</template>
<script>
    import Scroll from '../components/scroll.vue'

    export default {
        data() {
            return {
                list: [1,2,3,4,5,6,7,8,9,10,12,13],
                items: [1,2,3,4,5,6,7,8,9,10,12,13],
                scrollOptions1: {
                    scrollbar: true,
                    pullDownRefresh: true,
                    pullUpLoad: true
                },
                scrollOptions2: {
                    //  scrollbar: true,
                      pullDownRefresh: {
                        threshold: 60,
                        stop: 40,
                        txt: '加载完成'
                    },
                    pullUpLoad: {
                        txt: {
                            more:'上拉加载更多',
                            noMore: '暂无更多数据'
                        }
                    }
                }
            }
        },
        methods:{
            refreshData() {
                setTimeout(() => {
                    if(Math.random() > 0.5) {
                        this.list.unshift(Math.random()*10)
                    }else{
                        this.$refs.scroll.forceUpdate();
                    }
                    
                },2000)
            },
            getData() {
                setTimeout(() => {
                     if(Math.random() > 0.5) {
                        this.list.push(Math.random()*10)
                    }else{
                        this.$refs.scroll.forceUpdate();
                    }
                },2000)
            },
            listenScroll(pos){
                // console.log(pos)
            }
        },
        components: {
            Scroll
        }
    }
</script>
<style>
    .container{
        height: 450px;
        border: 1px solid #ddd;
        overflow: hidden;
        margin: 20px;
        border-radius: 4px;
    }
    .list-wrapper {
        padding: 0px;
        line-height: 60px;
        white-space: nowrap;
    }
    .container_H{
        display: inline-block;
        margin: 15px;
        overflow-x: scroll;
    }
    .cube-scroll-content{
        display: inline-block
    }
  
    .list-item {
         display: inline-block;
         width: 50px;
         background: red;
    }
</style>
