<template>
    <div>
        <ul>
            <li v-for="i in num" :key="i">
                <template v-if="i==10||i==20||i==30">
                     <div v-sticky="stickConfig" class="bar">{{i}}</div>
                </template>
                <template v-else>
                     <div class="foo">{{i}}</div>
                </template>
            </li>
        </ul>
    </div>
</template>
<script>
    import sticky from '../components/mixin/stickyTop.js'
    import tabBar from '../components/tab/tab-nav-bar.vue'
    export default {
        data() {
            return {
                num: 55,
                stickConfig: {
                    stickyTop: 0,
                    zIndex: 20
                },
                stickConfig_1: {
                    stickyTop: 43,
                    zIndex: 20
                },
                tabItems:['买入', '卖出', '收益'],
            }
        },
        created() {
            setTimeout(() => {
                this.num = 60
            }, 200)
        },
        directives: {
            'sticky': sticky
        },
        components: {
            tabBar
        }
    }
    
</script>
<style>
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .bar{
        padding: 10px;
        background: orange;
    }
    .foo{
        padding: 10px;
    }
</style>
