<template>
    <div class="layout">
        <tab-nav-bar-move
            :tab-items="tabItems"
            @tab-item-click="switchPage_v"
        ></tab-nav-bar-move>
        <br>
        <p>linePadding:指定下划线两侧的padding</p>
        <tab-nav-bar-move
            :tab-items="tabItems"
            :line-pading="25"
            @tab-item-click="switchPage_v"
        ></tab-nav-bar-move>
        <br>
        <p>activeItem:设置默认激活项</p>
        <tab-nav-bar-move
            :tab-items="tabItems"
            :line-pading="30"
            active-item="2"
            @tab-item-click="switchPage_v"
        ></tab-nav-bar-move>
        <br>
        <p>设置下划线的颜色</p>
        <tab-nav-bar-move
            :tab-items="tabItems"
            :line-pading="30"
            active-item="2"
            line-color="#40f"
            @tab-item-click="switchPage_v"
        ></tab-nav-bar-move>
        <br>
        <p>设置禁用 (数据中加入disabled属性)</p>
        <tab-nav-bar-move :tab-items="tabItems2"></tab-nav-bar-move>
        <br>
        <br>
        <p>滑动的下划线支持传入线条的颜色，文字会保持与线条的颜色一致</p>
        <br>
        <!-- <h2>下划线不可滚动（tab-bar）</h2>
        <tab-nav-bar 
            :tab-items="tabItems"
            @tab-item-click="switchPage_v"
        >
        </tab-nav-bar>
         <br>
        <p>指定下划线长度（lw）</p>
        <tab-nav-bar 
            :tab-items="tabItems"
            :lw="25"
        >
        </tab-nav-bar>
         <br>
        <p>不带下划线 (underline)</p>
        <tab-nav-bar 
            :tab-items="tabItems"
            :underline="false"
        >
        </tab-nav-bar>
         <br>
        <p>设置禁用 (数据中加入disabled属性)</p>
        <tab-nav-bar 
            :tab-items="tabItems2"
        >
        </tab-nav-bar>
        <br>
        <p>触发事件 （tab-item-click）</p>
        <tab-nav-bar 
            :tab-items="tabItems"
            @tab-item-click="switchPage"
        >
        </tab-nav-bar>
         <br>
        <p>设置默认激活项 （defaultActive）</p>
        <tab-nav-bar 
            :tab-items="tabItems"
            :active-item="1"
        >
        </tab-nav-bar> -->
        <br>
        <p>数据形式</p>
        <pre>
        tabItems:['买入', '卖出', '收益','提现'],
        tabItems:['买入', 
                  {name:'卖出', disabled:true}, 
                  '收益',
                  '提现'
                ]
        tabItems:[
            {name:'买入', disabled:false},
            {name:'卖出', disabled:false}, 
            {name:'收益', disabled:true}, 
            {name:'提现', disabled:false}, 
        ]
        </pre>
    </div>
    

</template>

<script>
    import TabNavBar from '../components/tab/tab-nav-bar.vue'
    import Toast from '../components/toast/index.js'
    import TabNavBarMove from '../components/tab/tab-nav-bar-move.vue'

    export default{
        data(){
            return {
                tabItems:['买入', '卖出', '收益', '提现'],
                tabItems2:['买入', {name:'卖出', disabled:true}, '收益','提现']
            }
        },
        methods: {
            switchPage(index) {
                Toast(`点击了${this.tabItems[index]}`, 'bottom', 500)
            },
            switchPage_v(index) {
                console.log(index)
            }
        },
        components: {
            TabNavBar,
            TabNavBarMove
        }
    }
</script>

<style scoped>
    .layout{
        background:#e9e9e9;
        padding:15px 0;
    }
    p{
        margin-bottom: 5px;
        font-size: 14px;
        color:#666;
        font-weight: lighter;
        padding-left: 10px;
    }
</style>
