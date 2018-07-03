<template>
  <a class="rect" :class="btnMode">
    <slot>test</slot>
  </a>
</template>
<script>
// document.body.addEventListener('touchstart', function () {});
const COMPONENT_NAME = 'ncf-rect'
export default {
  name: COMPONENT_NAME,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    btnMode() {
      if(this.disabled) {
        return 'disabled';
      }else{
        return (this.mode == 'normal') ? 'normal' : 'primary';
      }
    }
  }
}
</script>
<style scoped>
a{
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
a.normal{
    background: #fff;
}
a.disabled{
    background-color: #fafafa;
    color:#c3c3c3;
}
a.normal:active {
    background: rgba(0,0,0,.05);
    -webkit-tap-highlight-color:transparent;
}
a.primary{
    background: linear-gradient(10deg,#f37544,#ed4e39);
    background: -webkit-linear-gradient(10deg,#f37544,#ed4e39);
}
a.primary:active {
    background: linear-gradient(10deg,#dd533d,#d94437);
    background: -webkit-linear-gradient(10deg,#dd533d,#d94437);
    -webkit-tap-highlight-color:transparent;
}

</style>
