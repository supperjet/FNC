<template>
   <div class="ncf-loading">
    <span class="ncf-loading-spinners" :style="style">
      <i class="ncf-loading-spinner" v-for="(item, index) in balde" :key="index" :style="bgStyle"></i>
    </span>
  </div>
</template>

<script>
    const COMPONENT_NAME = 'ncf-loading'
    export default {
        name: COMPONENT_NAME,
        data() {
            return {
                balde: 12
            }
        },
        props: {
            size: {
                type: Number | String,
                default: 20
            },
            bgColor: {
                type: String,
                default: '#000'
            }
        },
        computed: {
            style() {
                if (!this.size) return
                const value = `${this.size}px`
                return {
                    width: value,
                    height: value
                }
            },
            bgStyle() {
                if(this.bgColor) {
                  return {
                    backgroundColor: this.bgColor,
                  }
                }else{
                  return {}
                }
            }
        }
  }

</script>

<style scoped>
    .ncf-loading {
        font-size: 14px;
    }
    .ncf-loading-spinners {
        position: relative;
        display: block;
        width: 1em;
        height: 1em;
        margin: 0 auto;
    }
    .ncf-loading-spinner {
        position: absolute;
        left: 44.5%;
        top: 37%;
        width: 2px;
        height: 20%;
        border-radius: 50%/20%;
        opacity: .25;
        background-color: currentColor;
        animation: spinner-fade 1s linear infinite;
    }
    .ncf-loading-spinner:nth-child(1) {
        animation-delay: 0s;
        transform: rotate(-150deg) translateY(-150%)
    }
    .ncf-loading-spinner:nth-child(2) {
        animation-delay: 0.0833333s;
        transform: rotate(-120deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(3) {
        animation-delay: 0.166667s;
        transform: rotate(-90deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(4) {
        animation-delay: 0.25s;
        transform: rotate(-60deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(5) {
        animation-delay: 0.333333s;
        transform: rotate(-30deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(6) {
        animation-delay: 0.416667s;
        transform: rotate(0deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(7) {
        animation-delay: 0.5s;
        transform: rotate(30deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(8) {
        animation-delay: 0.583333s;
        transform: rotate(60deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(9) {
        animation-delay: 0.666667s;
        transform: rotate(90deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(10) {
        animation-delay: 0.75s;
        transform: rotate(120deg) translateY(-150%);
   }
    .ncf-loading-spinner:nth-child(11) {
        animation-delay: 0.833333s;
        transform: rotate(150deg) translateY(-150%);
    }
    .ncf-loading-spinner:nth-child(12) {
        animation-delay: 0.916667s;
        transform: rotate(180deg) translateY(-150%);
    }

  @keyframes spinner-fade {
        0% {
            opacity: .85
        }
        50% {
            opacity: .25
        }
        100% {
            opacity: .25
        }
  }

</style>
