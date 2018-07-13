<template>
  <div class="ncf-btn" @click="sendMsg" :class="btnBottom">
    <ncf-rect :disabled="disabled" :mode="mode">
      <div class="txt" v-if="!requesting">
        <slot >充值</slot>
      </div>
      <div class="txt" v-else>
          <ncf-loading :size="'22'" :bg-color="'#fff'"></ncf-loading>
      </div>
    </ncf-rect>
    <div class="mask" v-show="requesting || disableActive" @click.stop></div>
  </div>
</template>
<script>
import ncfRect from './rect.vue';
import ncfLoading from './loading/loading_icon.vue';

const COMPONENT_NAME = 'ncf-btn';
const EVENTS = {
  BTN_EVENT: 'btn-event'
}
export default {
  name: COMPONENT_NAME,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    disableActive: {
      type: Boolean,
      default: false
    },
    reqing: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    requesting() {
      return this.reqing
    },
    btnBottom() {
      if(this.fixed) {
        return 'btn-bottom'
      }
    }
  },
  methods: {
    sendMsg() {
      if(!this.requesting && !this.disabled && !this.disableActive) {
          this.$emit(EVENTS.BTN_EVENT)
      }
    }
  },
  components: {
    ncfRect,
    ncfLoading
  }
}
</script>
<style scoped>
  .ncf-btn {
    color: #fff;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  .ncf-btn.btn-bottom{
    position: fixed;
    border-radius: 0px;
    margin: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .ncf-btn .txt{
    padding:11px 0;
    letter-spacing: 1px;
    font-size: 16px;
    text-align: center;
  }
  .ncf-btn .mask{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.2);
    z-index: 2;
  }
</style>
