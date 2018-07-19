<template>
    <div class="loading_icon_svg">
        <svg class="loading_spinner" 
             viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"
             :style="{'width': width + 'px', 'height': height+ 'px'}"
        >
            <circle class="loading__path" fill="none"
                    :stroke="stroke"
                    :stroke-width="line_w" stroke-linecap="round"
                    cx="33" cy="33" r="30"/>
        </svg>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'loading-svg'
    export default {
        props: {
            stroke: {
                type: String,
                default: '#000'
            },
            width: {
                type: Number,
                default:  18
            },
            height: {
                type: Number,
                default:  18
            },
            line_w: {
                type: Number,
                default: 3
            }
        }
    }
</script>
<style scoped>
.loading_icon_svg {
    display: block;
    text-align: center;
}
.loading_spinner {
    animation: loading-rotator 1.5s linear infinite;
    -webkit-animation: loading-rotator 1.5s linear infinite;       
}
.loading__path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    animation: loading-dash 1.5s ease-in-out infinite;
    -webkit-animation: loading-dash 1.5s ease-in-out infinite;       
    -webkit-transform-origin: center;
            transform-origin: center;
}
@-webkit-keyframes loading-rotator {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
  }
}

@keyframes loading-rotator {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
  }
}
@-webkit-keyframes loading-dash {
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg);
  }
}
</style>

