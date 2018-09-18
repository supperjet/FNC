<template>
    <div class="dropdown">
        <div class="drop">
            <drop-nav-bar
                class="dropbar"
                :items="items"
                :active-index="activeIndex"
                @menu-bar-item-click="itemClick"
            >
            </drop-nav-bar>
            <drop-container :active-index="activeIndex" @mask-click="hideContainer">
                <drop-container-item index="0">
                    this is page 1 <br>
                    this is page 1 <br>
                    this is page 1 <br>
                </drop-container-item>
                <drop-container-item index="1">
                    this is page 2 <br>
                    this is page 1 <br>
                    this is page 1 <br>
                    this is page 1 <br>
                </drop-container-item>
                <drop-container-item index="2">
                    this is page 3
                </drop-container-item>
            </drop-container>
        </div>
        <!-- 内容 -->
        <div class="ctn">
            <ul>
                <li v-for="i in 40" :key="i">{{i}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import dropNavBar from "../../components/dropdown/menu-bar.vue";
import dropContainer from "../../components/dropdown/drop/drop-container.vue";
import dropContainerItem from "../../components/dropdown/drop/drop-container-item.vue";

export default {
  props: {},
  data() {
    return {
      items: ["区域", "价格", "分享"],
      activeIndex: -1,
      dropVisible: false,
      stickConfig: {
            stickyTop: 0,
            zIndex: 20
        },
    };
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index;
    },
    hideContainer() {
      this.activeIndex = -1;
    }
  },
  components: {
    dropNavBar,
    dropContainer,
    dropContainerItem
  }
};
</script>

<style scoped>
.dropdown {
  position: fixed;
  left: 0;
  right:0;
  top: 0;
  bottom: 0;
  overflow: auto;
  background: #fff;
}
.dropbar{
    position: fixed;
    left: 0;
    right:0;
}
.ctn{
    margin-top: 44px;
}
</style>
