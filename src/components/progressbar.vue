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
      <div class="flagnum" 
           :style="{'left': value+'%'}"
           v-show="isFlag"
      >
        <ncf-number :value="val" :duration="3000" is-animated is-percent :precision="0" i></ncf-number>
      </div>
    </div>
    <slot name="end"></slot>
  </div>
</template>
<script>
import ncfNumber from './number.vue'
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
    },
    isFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      val: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.val = +this.value
    },20)
  },
  components: {
    ncfNumber
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
  .ncf-progress-bar .bar-content .flagnum {
    position: absolute;
    top: -20px;
    bottom:0;
    left: 0;
    background: #ed4e39;
    font-size: 12px;
    height: 18px;
    color: #fff;
    padding: 0 4px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 1px;
    font-weight: 100;
    animation: movenum 3s;
    transition: left 3s;
    transform: translateX(-50%) scale(0.6);
    -webkit-animation: movenum 3s;
    -webkit-transition: left 3s;
    -webkit-transform: translateX(-50%) scale(0.6);
  }
  .ncf-progress-bar .bar-content .flagnum:after {
    content: '';
    display: block;
    width:0;
    height:0;
    margin: 0 auto;
    border-width:5px 5px 0;
    border-style:solid;
    border-color: #ed4e39 transparent transparent;/*透明 透明  灰*/
  }
  .ncf-progress-bar .bar-content .bar-entity.animate{
    animation: moveForward 3s;
    transition: width 3s;
    -webkit-animation: moveForward 3s;
    -webkit-transition: width 3s;
  }
  @keyframes moveForward {
    from { width: 0;}
  }
  @-webkit-keyframes moveForward {
    from { width: 0;}
  }
  @keyframes movenum {
    from { left: 0;}
  }
  @-webkit-keyframes movenum {
    from { left: 0;}
  }
</style>
