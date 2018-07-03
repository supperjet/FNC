<template>
    <transition name="ncf-dialog-fade">
        <ncf-popup position="center" v-show="isVisible"  @mask-click="maskClick">
             <div class="ncf-dialog-main">
                  <div :class="containerClass">
                      <div v-if="title || $slots.title" class="ncf-dialog-title">
                          <slot name="title">
                              <div class="ncf-dialog-title-def">{{title}}</div>
                          </slot>
                      </div>
                      <div class="ncf-dialog-content">
                          <slot name="content">
                              <div class="ncf-dialog-content-def">
                                  <div v-html="content"></div>
                              </div>
                          </slot>
                      </div>
                      <div class="ncf-dialog-btns flex flex-h" v-if="needBtns">
                          <slot name="btns">
                              <a class="ncf-dialog-btn cancel flex-1"  v-if="isConfirm" @click="cancel">{{cancelTxt}}</a>
                              <a class="ncf-dialog-btn confirm flex-1"  @click="confirm" :style="confirmBtnStyle">{{confirmTxt}}</a>
                          </slot>
                      </div>
                  </div>
              </div>
        </ncf-popup>
     </transition>
</template>

<script>
import apiMixin from "../mixin/api.js";
import ncfPopup from "../popup.vue";

const COMPONENT_NAME = "ncf-dialog";
const EVENTS = {
  CONFIRM: "confirm",
  CANCEL: "cancel",
  CLOSE: "close"
};

export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    mode: {
      type: String,
      default: "confirm"
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    needBtns: {
      type: Boolean,
      default: true
    },
    confirmTxt: {
      type: String,
      default: "确定"
    },
    maskable: {
      type: Boolean,
      default: true
    },
    cancelTxt: {
      type: String,
      default: "取消"
    },
    ok: {
      type: Function
    }
  },
  computed: {
    isConfirm() {
      return this.mode === "confirm";
    },
    confirmBtnStyle() {
      if (!this.isConfirm) {
        return {
          margin: "0 20% 20px 20%",
          width: "180px"
        };
      }
    },
    containerClass() {
      return `ncf-dialog-${this.mode}`;
    }
  },

  methods: {
    confirm(e) {
      this.ok && this.ok();
      this.hide();
      this.$emit(EVENTS.CONFIRM, e);
    },
    cancel(e) {
      this.hide();
      this.$emit(EVENTS.CANCEL, e);
    },
    maskClick() {
      this.maskable && this.hide();
    }
  },
  components: {
    ncfPopup
  }
};
</script>

<style scoped>
@import "../../common/common.css";
.ncf-dialog-main {
  margin: 0 10%;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  background-color: #fff;
}
.ncf-dialog-confirm,
.ncf-dialog-alert {
  overflow: hidden;
  position: relative;
}
.ncf-dialog-title {
  background: linear-gradient(10deg, #f37544 0%, #ed4d39 99%);
  background: -webkit-linear-gradient(10deg, #f37544 0%, #ed4d39 99%);
}
.ncf-dialog-title .ncf-dialog-title-def {
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
  padding: 10px 0;
  font-size: 15px;
  letter-spacing: 0.01rem;
}
.ncf-dialog-content {
  margin: 22px 18px 22px 18px;
  text-align: center;
  font-size: 14px;
  color: #333;
}
.ncf-dialog-btns {
  width: 100%;
  font-size: 0;
  overflow: hidden;
}
.ncf-dialog-confirm .ncf-dialog-btns .ncf-dialog-btn .border-right-1px::after {
  right: 50%;
  border-color: #ccc;
}
.ncf-dialog-btn {
  width: 100px;
  padding: 8px 0;
  font-size: 15px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(10deg, #f37544 0%, #ed4d39 99%);
  background: -webkit-linear-gradient(10deg, #f37544 0%, #ed4d39 99%);
  box-sizing: border-box;
  color: #fff;
  border-radius: 4px;
  letter-spacing: 0.01rem;
}
.ncf-dialog-btn.cancel {
  margin: 0px 12px 17px 24px;
  background: #fff;
  color: #ed4d39;
  border: 1px solid #ed4d39;
}
.ncf-dialog-btn.confirm {
  margin: 0px 24px 17px 12px;
}
.ncf-dialog-fade-enter-active {
  animation: dialog-fadein 0.3s;
}
.ncf-dialog-fade-enter-active .ncf-dialog-main {
  animation: dialog-zoom 0.3s;
}
@keyframes dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes dialog-zoom {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
