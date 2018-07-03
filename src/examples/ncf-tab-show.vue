<template>
    <div class="layout">
        <div class="ncf-tab">
            <tab-bar :tab-items="tabItems" @tab-item-click="getActiveItemIndex"></tab-bar>
            <tab-container :active-item="activeItem">
                    <tab-container-item :index="0">
                        第一段类容
                    </tab-container-item>
                    <tab-container-item :index="1">
                        第二段类容
                    </tab-container-item>
                    <tab-container-item :index="2">
                        第三段类容
                    </tab-container-item>
                    <tab-container-item :index="3">
                        第四段类容
                    </tab-container-item>
            </tab-container>
        </div>
    </div>
    
</template>

<script>
    import TabBar from '../components/tab/tab-nav-bar.vue'
    import TabContainer from '../components/tab/container/tab-container.vue'
    import TabContainerItem from '../components/tab/container/tab-container-item.vue'

    export default {
        data() {
            return {
                tabItems:['买入', '卖出', '收益','提现'],
                activeItem: 0
            }
        },
        methods: {
            getActiveItemIndex(index) {
                this.activeItem = index
            }
        },
        components: {
            TabBar,
            TabContainer,
            TabContainerItem
        }
    }

</script>

<style>
    .layout{
        position: fixed;
        top:0;left:0;bottom:0;right:0;
        height: 100%;
        background: #f3f3f3;
    }
</style>
