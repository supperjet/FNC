<template>
  <span class="ncf-number">
      {{ formatValue | doPrecision(precision, isRoundUp) | doFormat(isSeparator) }}
  </span>
</template>
<script>
    import Animate from '../common/animate.js'
    import {numberWithCommas, noop} from '../common/methods.js'

    const COMPONENT_NUMBER = 'ncf-num'
    export default {
        name: COMPONENT_NUMBER,
        props: {
            value: {
                type: Number,
                default: 0,
            },
            precision: {
                type: Number,
                default: 2,
            },
            isRoundUp: {
                type: Boolean,
                default: true,
            },
            isSeparator: {
                type: Boolean,
                default: false,
            },
            isAnimated: {
                type: Boolean,
                default: false,
            },
            duration: {
                type: Number,
                default: 1000,
            }
        },
        data() {
            return {
                formatValue: 0,
            }
        },
        watch: {
            value: {
                handler(newVal, oldVal) {
                    if(this.isAnimated) {
                        this._run(oldVal, newVal)
                    }else{
                        this.formatValue = newVal
                    }
                },
                immediate: true
            }
        },
        methods: {
            _run(from=0, to=0) {
                const step = (percent) => {
                    this.formatValue = from + (to - from) * percent
                }
                const verfiy = id => id
                Animate.start(step, verfiy, noop, this.duration)
            }
        },
        filters: {
            doPrecision(value, precision, isRoundUp) {
                const exponentialForm = Number(`${value}e${precision}`) //指数形式
                const rounded = isRoundUp ? Math.round(exponentialForm) : Math.floor(exponentialForm)
                return Number(`${rounded}e-${precision}`).toFixed(precision)
            },
            doFormat(value, isSeparator) {
                if(!isSeparator) return value;
                return numberWithCommas(value)
            }
        }
    }
</script>
