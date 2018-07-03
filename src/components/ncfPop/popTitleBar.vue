<template>
  <div
    class="md-popup-title-bar border-bottom-1px"
    @touchmove="$_preventScroll"
  >
    <!-- Cancel -->
    <div
      class="title-bar-left md-popup-cancel"
      v-if="cancelText"
      v-html="cancelText"
      @click="$emit('cancel')"
    ></div>
    <div
      class="title-bar-left md-popup-cancel"
      v-else-if="$slots.cancel"
      @click="$emit('cancel')"
    >
      <slot name="cancel"></slot>
    </div>

    <!-- Title -->
    <div
      class="title-bar-title"
      v-if="title"
      v-html="title"
    ></div>
    <div
      class="title-bar-title"
      v-else
    >
      <slot name="title"></slot>
    </div>

    <!-- Ok -->
    <div
      class="title-bar-right md-popup-confirm"
      v-if="okText"
      v-html="okText"
      @click="$emit('confirm')"
    ></div>
    <div
      class="title-bar-right md-popup-confirm"
      v-else-if="$slots.confirm"
      @click="$emit('confirm')"
    >
      <slot name="confirm"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'md-popup-title-bar',
  props: {
    title: {
      type: String,
      default: '选择年份',
    },
    okText: {
      type: String,
      default: '确认',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
  },

  methods: {
    $_preventScroll(e) {
      e.preventDefault()
    },
  },
}

</script>

<style scoped>
@import '../../common/common.css';

.md-popup-title-bar {
    position: relative;
    background: #fff;
    font-size: 0;
    height: 52px;
}
.md-popup-title-bar > div {
    display: inline-block;
    height: 100%;
    line-height: 3.2rem;
    color: #333;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;
    text-align: center;
}
.md-popup-title-bar .title-bar-left,
.md-popup-title-bar .title-bar-right {
    width: 20%;
}
.md-popup-title-bar .title-bar-title{
    width: 60%;
    font-size: 18px;
}
.md-popup-title-bar .title-bar-left{
    color:#666;
}
.md-popup-title-bar .title-bar-right{
    color:#fc9153;
}
</style>
