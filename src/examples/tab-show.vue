<template>
    <div class='layout' style="text-align: center">
        <small>可拖动的tabContainer</small>
        <div class="tab_1">
            <tab-nav-bar 
                :active-item="activeItem"
                :tab-items="tabItems"
                @tab-item-click="changeActive"
            >
            </tab-nav-bar>
            <tab-container 
                :active-item="activeItem"
                class="tabContainer"
                @change-active="changeActive"
            >
                <tab-container-item class="item" v-for="(item, index) in tabItems" :key="index">{{item}}</tab-container-item>
            </tab-container>
        </div>
        </br>
        <small>不可滚动tabContainer</small>
        <div class="tab_2">
            <tab-nav-bar 
                :active-item="activeItem_s"
                :tab-items="tabItems"
                @tab-item-click="changeActive_s"
            >
            </tab-nav-bar>
            <tab-container-simple
                :active-item="activeItem_s"
                class="tabContainer"
            >
                <tab-container-item-simple class="item" :index="0">买入</tab-container-item-simple>
                <tab-container-item-simple class="item" :index="1">卖出</tab-container-item-simple>
                <tab-container-item-simple class="item" :index="2">收益</tab-container-item-simple>
                <tab-container-item-simple class="item" :index="3">提现</tab-container-item-simple>
            </tab-container-simple>
        </div>
        </br>
        <small>不可拖动动tabContainer</small>
        <div class="tab_2">
            <tab-nav-bar 
                :active-item="activeItem_d"
                :tab-items="tabItems"
                @tab-item-click="changeActive_d"
            >
            </tab-nav-bar>
             <tab-container 
                class="tabContainer"
                :active-item="activeItem_d"
                stop-drag
            >
                <tab-container-item class="item" v-for="(item, index) in tabItems" :key="index">{{item}}</tab-container-item>
            </tab-container>
        </div>
        <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
    </div>
</template>
<script>
import TabNavBar from "../components/tab/tab-nav-bar.vue";
import TabContainer from "../components/tab/container/tab-container.vue";
import TabContainerItem from "../components/tab/container/tab-container-item.vue";
import TabContainerSimple from "../components/tab/container/tab-container-simple.vue";
import TabContainerItemSimple from "../components/tab/container/tab-container-item-simple.vue";

export default {
  data() {
    return {
      activeItem: 0,
      activeItem_s: 0,
      activeItem_d: 0,
      tabItems: ["买入", "卖出", "收益", "提现"]
    };
  },
  methods: {
    back() {
      this.$router.push({
        path: "/"
      });
    },
    changeActive(index) {
      this.activeItem = index;
      console.log(`滑动到第${index}个了`);
    },
    changeActive_d(index) {
       this.activeItem_d = index;
    },
    changeActive_s(index) {
      this.activeItem_s = index;
    }
  },
  components: {
    TabNavBar,
    TabContainer,
    TabContainerItem,
    TabContainerSimple,
    TabContainerItemSimple
  }
};
</script>

<style scoped>
.layout {
  background: #f0f0f0;
}
.btn {
  width: 100%;
  height: 40px;
  background-color: #fff;
  outline: none;
  color: #444;
  margin-bottom: 10px;
}
.btn-blue {
  background: #49f;
  color: #fff;
  border: none;
  margin-top: 20px;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */
}
.tab_1 {
  background: #fff;
}
.item {
  text-align: center;
  background: #fff;
  line-height: 5;
  font-size: 40px;
  font-weight: bolder;
  color: #333;
}
</style>
