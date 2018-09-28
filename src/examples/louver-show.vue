<template>
    <div class="louver">
        <p>
        【louver】：是一个列表数据截取组件，它支持动态的截取数据，然后提供给UI渲染。组件内部只是个简单的slot，
         在内部处理好数据后，会将数据挂载到slot上，传给外界的模板。外界的模板包裹在template中，通过slot-scope，
         调用处理好的数据，以达到UI样式自定义的效果。通过动态的修改start和end的值，能够让模板动态的获取所需渲染的数据，
         该功能可以作为虚拟列表的基础功能。
        </p>
        <p>初始列表: [1,2,3,4,5,6,7,8,9,10,11]</p>
        <louver :data-list="dataList" :start="start" :end="end">
            <template slot-scope="list">
                <ul>
                    <li v-for="(item, index) in list.data" :key="index">{{item}}</li>
                </ul>
            </template>
        </louver>
        
    </div>
</template>
<script>
    import louver from '../components/list/louver.vue'

    const range = function(n, m) {
        return Math.floor(Math.random()*(m-n) + n)
    }

    export default {
        data() {
            return {
                start: 0,
                end: 2,
                dataList: [1,2,3,4,5,6,7,8,9,10,11],
                timer: null
            }
        },
        created() {
            this.timer = setInterval(() => {
                this.start = range(1,5)
                this.end = range(6, 7)
            },500)
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        components: {
            [louver.name]: louver
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

</style>
