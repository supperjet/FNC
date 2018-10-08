<template>
  <transition name="fade">
    <div class="ncf-popup" v-show="isVisible">
      <div class="ncf-popup-mask" v-show="mask" @click.stop="maskClick">
        <slot name="mask">
        </slot>
      </div>
      <div class="ncf-popup-container" :class="classObject">
        <div class="ncf-popup-content" v-if="$slots.default">
          <slot></slot>
        </div>
        <div class="ncf-popup-content" v-else v-html="content"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import apiMixin from "./mixin/api.js";
const COMPONENT_NAME = "ncf-popup";
const EVENTS = { MASK_CLICK: "mask-click" };
export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  computed: {
    classObject() {
      if (!this.position) return;
      if (this.position === "center") {
        return { "ncf-popup-center": true };
      }
    }
  },
  methods: {
    maskClick() {
      this.$emit(EVENTS.MASK_CLICK);
    }
  }
};
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .ncf-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  }
  .ncf-popup-mask,
  .ncf-popup-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .ncf-popup-mask {
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }
  .ncf-popup-container {
    transform: translate3d(100%, 100%, 0);
    -webkit-transform: translate3d(100%, 100%, 0);
  }
  .ncf-popup-content {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    transform: translate3d(-100%, -100%, 0);
    -webkit-transform: translate3d(-100%, -100%, 0);
  }
  .ncf-popup-center .ncf-popup-content {
    position: absolute;
    top: -50%;
    left: -50%;
    max-width: 100%;
    box-sizing: border-box;
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
  }
</style>
