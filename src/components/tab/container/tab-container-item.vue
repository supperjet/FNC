<template>
    <div :class="[$parent.direction == 'horizontal' ? 'ncf-tab-container-item-h' : 'ncf-tab-container-item-v']" >
        <slot></slot>
    </div>
</template>

<script>
const COMPONENT_NAME = "ncf-tab-container-item";
export default {
  name: COMPONENT_NAME
};
</script>

<style>
.ncf-tab-container-item-h {
  float: left;
  height: 100%;
  box-sizing: border-box;
}
.ncf-tab-container-item-v {
  height: 100%;
  box-sizing: border-box;
}
</style>
