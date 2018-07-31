<template>
  <div class="ncf-progress-bar flex flex-h flex-align-center">
    <slot name="start"></slot>
    <div class="bar-content">
      <div class="bar-shadow" 
           :style="{'height': barHeight+'px', 'background': shadowColor}"
      ></div>
      <div class="bar-entity" 
           :class="{'animate': isAnimated}"
          :style="{'height': barHeight+'px', 'width': value+'%', 'background': lineColor}"
      ></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>
<script>
const COMPONENT_NAME = 'ncf-progress-bar'

export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: Number | String,
      default: 50
    },
    barHeight: {
      type: Number | String,
      default: 5
    },
    shadowColor: {
      type: String,
      default: '#ccc'
    },
    lineColor: {
      type: String,
      default: '#444'
    },
    isAnimated: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped>
  @import '../common/common.css';

  .ncf-progress-bar {
    width: 100%;
  }
  .ncf-progress-bar .bar-content{
    width: 100%;
    position: relative;
  }
  .ncf-progress-bar .bar-content .bar-shadow {
    border-radius: 0.5rem;
  }
  .ncf-progress-bar .bar-content .bar-entity{
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.5rem;
  }
  .ncf-progress-bar .bar-content .bar-entity.animate{
    animation: moveForward 3s;
    transition: width 5s linear;
    -webkit-animation: moveForward 3s;
    -webkit-transition: width 5s linear;
  }
  @keyframes moveForward {
    from { width: 0;}
  }
  @-webkit-keyframes moveForward {
    from { width: 0;}
  }
</style>
