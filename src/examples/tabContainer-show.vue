<template>
    <div>
        <small><strong>横向滚动</strong>，不需要设置外层container的height</small>
        <tab-container 
            class="tabContainer"
            :active-item="2"
            @change-active="changeActive"
        >
            <tab-container-item class="item" :class="['item'+index]" v-for="(item, index) in items" :key="index">{{item}}</tab-container-item>
        </tab-container>

        <small><strong>纵向滚动</strong>，需要设置外层container的height</small>
        <tab-container 
            class="tabContainer_v"
            direction="vertical"
            @change-active="changeActive"
        >
            <tab-container-item class="item" :class="['item'+index]" v-for="(item, index) in items" :key="index">{{item}}</tab-container-item>
        </tab-container>
         <small>监听事件（change-active）看右侧打印值</small>
     </div>
</template>
<script>
    import TabContainer from '../components/tab/container/tab-container.vue'
    import TabContainerItem from '../components/tab/container/tab-container-item.vue'

    export default {
        data() {
            return {
                items: [1,2,3,4,5,6]
            }
        },
        methods: {
            changeActive(index) {
                console.log(`滑动到第${index}个了`)
            }
        },
        components: {
            TabContainer,
            TabContainerItem
        }
    }
    
</script>
<style>
    .tabContainer_v{
        height: 200px;
    }
    .item{
        text-align: center;
        background: #ed4e39;
        line-height: 5;
        font-size: 40px;
        font-weight: bolder;
        color: #fff;
    }
    .item1{
        background: #233142;
    }
    .item2{
        background: #facf5a;
    }
    .item3{
        background: #f95959;
    }
    .item4{
        background: #455d7a;
    }
    .item5{
        background: #a1c45a;
    }

</style>
