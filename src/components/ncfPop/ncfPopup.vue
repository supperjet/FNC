<template>
  <div
    v-show="isPopupShow"
    class="ncf-popup-v"
    :class="[
      hasMask ? 'with-mask' : '',
      position
    ]"
  >
    <transition name="fade">
      <div
        v-show="hasMask && isPopupBoxShow"
        @click="_onPopupMaskClick"
        class="ncf-popup-mask"
      ></div>
    </transition>
    <transition
      :name="transition"
      @before-enter="_onPopupTransitionStart"
      @before-leave="_onPopupTransitionStart"
      @after-enter="_onPopupTransitionEnd"
      @after-leave="_onPopupTransitionEnd"
    >
      <div
        v-show="isPopupBoxShow"
        class="ncf-popup-box"
        :class="[transition]"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
const COMPONENT_NAME = 'ncf-popup';
const EVENTS = {
  BEFORE_HIDE: 'before-hide',
  BEFORE_SHOW: 'before-show',
  SHOW: 'show',
  HIDE: 'hide'
}
export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    hasMask: {
      type: Boolean,
      default: true,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'center',
    },
    transition: {
      type: String,
      default() {
        switch (this.position) {
          case 'bottom':
            return 'slide-up'
          case 'top':
            return 'slide-down'
          case 'left':
            return 'slide-right'
          case 'right':
            return 'slide-left'
          default:
            return 'fade'
        }
      },
    },
    preventScroll: {
      type: Boolean,
      default: false,
    },
    preventScrollExclude: {
      type: [String, HTMLElement],
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      isPopupShow: false,
      isPopupBoxShow: false,
      isAnimation: false,
    }
  },
  watch: {
    value(val) {
      if (val) {
        if (this.isAnimation) {
          setTimeout(() => {
            this._showPopupBox()
          }, 50)
        } else {
          this._showPopupBox()
        }
      } else {
        this._hidePopupBox()
      }
    },
    preventScrollExclude(val, oldVal) {
      this._preventScrollExclude(false, oldVal);
      this._preventScrollExclude(true, val);
    },
  },
  mounted() {
    this.value && this._showPopupBox();
  },
  methods: {
    show() {
      this._showPopupBox() 
    },
    hide() {
      this._hidePopupBox() 
    },
    _showPopupBox() {
      this.isPopupShow = true;
      this.isAnimation = true;
      this.$nextTick(() => {
        this.isPopupBoxShow = true;
      })
      this.preventScroll && this._preventScroll(true);
    },
    _hidePopupBox() {
      this.isAnimation = true;
      this.isPopupBoxShow = false;
      this.preventScroll && this._preventScroll(false);
    },
    _preventScroll(isBind) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener';
      const masker = this.$el.querySelector('.ncf-popup-mask');
      const boxer = this.$el.querySelector('.ncf-popup-box');
      masker && masker[handler]('touchmove', this._preventDefault, false);
      boxer && boxer[handler]('touchmove', this._preventDefault, false);
      this._preventScrollExclude(isBind);
    },
    _preventScrollExclude(isBind, preventScrollExclude) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener';
      preventScrollExclude = preventScrollExclude || this.preventScrollExclude;
      const excluder = preventScrollExclude && typeof preventScrollExclude === 'string'
                        ? this.$el.querySelector(preventScrollExclude)
                        : preventScrollExclude;
      excluder && excluder[handler]('touchmove', this._stopImmediatePropagation, false);
    },
    _preventDefault(event) {
      event.preventDefault();
    },
    _stopImmediatePropagation(event) {
      event.stopImmediatePropagation();
    },
    _onPopupTransitionStart() {
      if (!this.isPopupBoxShow) {
        this.$emit(EVENTS.BEFORE_HIDE);
      } else {
        this.$emit(EVENTS.BEFORE_SHOW);
      }
    },
    _onPopupTransitionEnd() {
      if (!this.isAnimation) return;
      if (!this.isPopupBoxShow) {
        this.isPopupShow = false;
        this.$emit(EVENTS.HIDE);
      } else {
        this.$emit(EVENTS.SHOW);
      }
      this.isAnimation = false;
    },
    _onPopupMaskClick() {
      this.maskClosable && this._hidePopupBox()
    },
  },
}
</script>
<style scoped>
.ncf-popup-v .ncf-popup-box {
  position: fixed;
  z-index: 1000;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  will-change: auto;
  background: #fff;
}
.ncf-popup-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
}
.ncf-popup-v.with-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.ncf-popup-v.with-mask .ncf-popup-box {
  position: absolute;
  z-index: 2;
}
.ncf-popup-v.center .ncf-popup-box {
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
}
.ncf-popup-v.top .ncf-popup-box,
.ncf-popup-v.bottom .ncf-popup-box,
.ncf-popup-v.left .ncf-popup-box,
.ncf-popup-v.right .ncf-popup-box {
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
.ncf-popup-v.top .ncf-popup-box,
.ncf-popup-v.bottom .ncf-popup-box {
  width: 100%;
  max-height: 300px; 
}
.ncf-popup-v.left .ncf-popup-box,
.ncf-popup-v.right .ncf-popup-box {
  height: 100%;
  width: 70%;
}
.ncf-popup-v.top .ncf-popup-box {
  top: 0;
  left: 0;
}
.ncf-popup-v.bottom .ncf-popup-box {
  bottom: 0;
  left: 0;
}
.ncf-popup-v.left .ncf-popup-box {
  left: 0;
  top: 0;
}
.ncf-popup-v.right .ncf-popup-box {
  right: 0;
  top: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active, .bottom .show{
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}
.slide-up-enter,
.slide-up-leave-to,.slide-up-leave-active{
  transform: translate3d(0, 100%, 0);
  -webkit-transform: translate3d(0, 100%, 0);
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translate3d(0, -100%, 0);
  -webkit-transform: translate3d(0, -100%, 0);
}
.slide-down-leave-active {
  transform: translate3d(0, -100%, 0);
  -webkit-transform: translate3d(0, -100%, 0);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translate3d(70%, 0, 0);
  -webkit-transform: translate3d(70%, 0, 0);
}
.slide-left-leave-active {
  transform: translate3d(100%, 0, 0);
  -webkit-transform: translate3d(100%, 0, 0);
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translate3d(-70%, 0, 0);
  -webkit-transform: translate3d(-70%, 0, 0);
}
.slide-right-leave-active {
  transform: translate3d(-100%, 0, 0);
  -webkit-transform: translate3d(-100%, 0, 0);
}
</style>
