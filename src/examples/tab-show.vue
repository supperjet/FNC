<template>
    <div class='layout'>
        <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
        <div class="tab">
            <tab-nav :default-active="activeItem" @handle-tab-item-click="changeValue">
                <tab-nav-item :index="1">买入</tab-nav-item>
                <tab-nav-item :index="2">买出</tab-nav-item>
                <tab-nav-item :index="3">撤销</tab-nav-item>
                <tab-nav-item :index="4">收益</tab-nav-item>
            </tab-nav>
            <tab-container :value="activeItem" :swipeable="true">
                <tab-container-item :id="1">
                    <cell v-for="(n, index) in 10" :key="index"></cell>
                </tab-container-item>
                <tab-container-item :id="2">
                    <cell v-for="(n, index) in 8" :key="index"></cell>
                </tab-container-item>
                <tab-container-item :id="3">
                    <cell v-for="(n, index) in 15" :key="index"></cell>
                </tab-container-item>
                <tab-container-item :id="4">
                    <cell v-for="(n, index) in 5" :key="index"></cell>
                </tab-container-item>
            </tab-container>
        </div>
    </div>
</template>
<script>

import TabNav from '../components/tab/nav/tab-nav.vue'
import TabNavItem from '../components/tab/nav/tab-head-item.vue'
import TabContainer from '../components/tab/tab-container.vue'
import TabContainerItem from '../components/tab/tab-container-item.vue'
import Cell from '../components/cell.vue'
export default {
    data() {
        return {
            activeItem: 1
        }
    },
    methods: {
        back() {
            this.$router.push({
                path: '/'
            })
        },
        changeValue(index) {
            this.activeItem = index
        }
    },
    components: {
        Cell,
        TabNav,
        TabNavItem,
        TabContainer,
        TabContainerItem
    }
}
    
</script>

<style>
.btn{
  width: 100%;
  height: 40px;
  background-color: #fff;
  outline: none;
  color: #444;
  margin-bottom: 10px;
}
.btn-blue{
  background: #49f;
  color: #fff;
  border: none;
}
.tab{
    background: #fff;
}
.layout {
    background: #fff;
    padding-top: 20px;
}
</style>
