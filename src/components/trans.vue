<template>
  <transition :name="transition">
      <slot></slot>
  </transition>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'down'
    },
    transition: {
      type: String,
      default() {
        switch (this.mode) {
          case 'up':
            return 'slide-up'
          case 'down':
            return 'slide-down'
          case 'left':
            return 'slide-right'
          case 'right':
            return 'slide-left'
          default:
            return 'fade-left'
        }
      },
    }
  }
}
</script>
<style scoped>
  .slide-right-enter-active, .slide-right-leave-active {
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
  }
  .slide-right-enter, .slide-right-leave-to {
      transform: translate3d(100%, 0, 0);
      -webkit-transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter-active, .slide-left-leave-active {
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
  }
  .slide-left-enter, .slide-left-leave-to {
      transform: translate3d(-100%, 0, 0);
      -webkit-transform: translate3d(-100%, 0, 0);
  }
  .slide-up-enter-active, .slide-up-leave-active {
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
  }
  .slide-up-enter, .slide-up-leave-to {
      transform: translate3d(0, 100%, 0);
      -webkit-transform: translate3d(0, 100%, 0);
  }
  .slide-down-enter-active, .slide-down-leave-active {
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
  }
  .slide-down-enter, .slide-down-leave-to {
      transform: translate3d(0, -100%, 0);
      -webkit-transform: translate3d(0, -100%, 0);
  }
  .fade-left-enter-active, .fade-left-leave-active {
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
  }
  .fade-left-enter, .fade-left-leave-to {
      opacity: 0;
      transform: translate3d(50%, 0, 0);
      -webkit-transform: translate3d(50%, 0, 0);
  }
</style>
