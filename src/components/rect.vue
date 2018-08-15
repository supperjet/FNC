<template>
  <a class="rect" :class="btnMode" :style="bgStyle">
    <slot>test</slot>
  </a>
</template>
<script>
const COMPONENT_NAME = 'ncf-rect'
const colorGroup = ['normal', 'primary', 'green']

export default {
  name: COMPONENT_NAME,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: ''
    },
  },
  computed: {
    btnMode() {
      if(this.disabled) {
        return 'disabled';
      }else{
        if(colorGroup.indexOf(this.mode) != -1) {
          return this.mode
        }else{
          if(this.mode) {
            console.warn('mode: 必须是[normal, primary, green]')
          }
        }
      }
    },
    bgStyle() {
      if(this.bgColor && !this.mode) {
        return {
          'background': this.bgColor
        }
      }
    }
  }
}
</script>
<style scoped>
  a {
      text-decoration: none;
      outline: 0;
  }
  a.rect{
      display: block;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  a.rect:active{
      background: rgba(0,0,0,.1);
      -webkit-tap-highlight-color:transparent;
  }
  .rect.normal{
      background: #fff;
      color: #333;
  }
  .rect.normal:active {
      background: rgba(0,0,0,.05);
      -webkit-tap-highlight-color:transparent;
  }
  .rect.primary{
      color: #fff;
      background: linear-gradient(10deg,#f37544,#ed4e39);
      background: -webkit-linear-gradient(10deg,#f37544,#ed4e39);
  }
  .rect.primary:active {
      background: linear-gradient(10deg,#dd533d,#d94437);
      background: -webkit-linear-gradient(10deg,#dd533d,#d94437);
      -webkit-tap-highlight-color:transparent;
  }
  .rect.green{
      color: #fff;
      background: linear-gradient(10deg,#2ed058,#15c25b);
      background: -webkit-linear-gradient(10deg,#2ed058,#15c25b);
  }
  .rect.green:active {
      background: linear-gradient(10deg,#209c52,#209c52);
      background: -webkit-linear-gradient(10deg,#209c52,#209c52);
      -webkit-tap-highlight-color:transparent;
  }
  .rect.disabled{
      background-color: #ddd;
      color:#d0d0d0;
  }
</style>
