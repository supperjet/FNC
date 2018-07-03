<template>
    <transition name="ncf-toast-fade">
        <div class="ncf-toast">
          <div class="ncf-toast-container" 
               :class="[pos=='bottom'?'btm':'']"
               v-show="isVisible"
          >
            <div class="ncf-toast-tip">{{content}}</div>
          </div>
        </div>
    </transition>
</template>

<script>
import apiMixin from "../mixin/api.js";

const COMPONENT_NAME = "toast";
export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    content: {
      type: String,
      default: ""
    },
    duration: {
      type: Number | String,
      default: 1000
    },
    pos: {
      type: String,
      default: "center"
    }
  },
  methods: {
    show() {
      const self = this;
      self.isVisible = true;
      if (this.duration) {
        setTimeout(() => {
          self.hide();
        }, self.duration);
      }
    },
    hide() {
      this.isVisible = false;
    }
  }
};
</script>

<style scoped>
.ncf-toast {
}
.ncf-toast-container {
  padding: 6px 15px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
.ncf-toast-container.btm {
  top: 80%;
}
.ncf-toast-tip {
  font-size: 12px;
  letter-spacing: 0.01rem;
  font-weight: 200;
  overflow: hidden;
  color: #fff;
}
.ncf-toast-fade-enter-active {
  animation: toast-in 0.3s;
}
.ncf-toast-fade-leave-active {
  animation: toast-out 0.4s;
}

@keyframes toast-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes toast-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
