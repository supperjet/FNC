<template>
    <scroll-view
        direction="H"
        scroll-content-width="800px"
    >
        <ul>
           <li class="item" v-for="(item,index) in list" :key="index">
               {{item}}
           </li>
        </ul>
    </scroll-view>
</template>
<script>
    import ScrollView from '../components/scrollView.vue'

    export default {
        data() {
            return {
                list: []
            }
        },
        created() {
            setTimeout(()=>{
                this.list=[1,2,3,4,5,6,7,8]
            }, 2000)
        },
        components: {
            ScrollView
        }
    }
</script>
<style>
    ul{
        padding: 0;
        margin: 0;
        white-space: nowrap;
    }
    .item{
        display: inline-block;
        width: 100px;
        text-align: center;
        background: red;
        height: 100px;
    }
</style>
