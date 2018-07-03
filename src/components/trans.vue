<template>
  <transition :name="reverse?'slide-left':'slide'">
    <div class="slide-container" :class="typeClass" :style="bgStyle">
      <slot>
        <div></div>
      </slot>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeClass() {
      return this.type ? `${this.type}-slide` : ''
    },
    bgStyle() {
      if(this.bgColor) {
        return {
          backgroundColor: this.bgColor
        }
      }else{
        return {}
      }
    }
  }
}
</script>
<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
}
.slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
}
.slide-left-enter-active, .slide-left-leave-active {
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
}
.slide-left-enter, .slide-left-leave-to {
    transform: translate3d(-100%, 0, 0);
    -webkit-transform: translate3d(-100%, 0, 0);
}
</style>
