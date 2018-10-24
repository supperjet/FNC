<template>
    <div class="price">
        <slot name="header">
            <input type="number" v-model="price" v-if="counter">
        </slot>
        <div class="ruler" ref="container">
            <canvas 
                class="price" 
                ref="priceRuler"
                @touchstart="onTouchStart"
                @touchmove="onTouchMove"
                @touchend="onTouchEnd"
            ></canvas>
        </div>
    </div>
</template>

<script>
    import Ruler from './ruler.js';

    const EaseOut = (target, current, percent=0.03) => {
        return current + (target - current)*percent
    }
    const COMPONENT_NAME = 'price-ruler';
    const DPR = window.devicePixelRatio || 2;   //分辨率
    let OFFSETX = 0;

    const EVENTS = {
        PRICE_CHANGE: 'price-change'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100000 
            },
            defaultValue: {
                type: Number
            },
            width: {
                type: Number,
                default: 5000
            },
            step: {
                type: Number,
                default: 1000
            },
            color: {
                type: String,
                default: '#5c636e'
            },
            midColor: {
                type: String,
                default: '#db2d43'
            },
            fl: {
                type: Number,
                default: 0.05
            },
            isAttract: {
                type: Boolean,
                default: true
            },
            counter: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                rulerConfig: {},
                touch: {x: 0, isPressed:false},
                currentValue: this.defaultValue,
                price: this.min,
                speed: 0,
                start: 0,
                end: 0
            }
        },
        mounted() {
            const container = this.$refs['container'];
            const canvas = this.$refs['priceRuler'];
            const cW = container.offsetWidth, cH = container.offsetHeight;
            const ruleX = cW/2, ruleY = cH/2;

            this.W = cW;
            this.H = cH;
            this.ctx = canvas.getContext('2d');
            //设置中心点
            this.centerX = Math.round(cW/2);
            //设置canvas
            this.setCanvas(canvas,cW, cH);
            //配置rulerCanvas
            this.rulerConfig = {
                x: ruleX,
                y: ruleY,
                scaleX: DPR,
                scaleY: DPR,
                min: this.min,
                max: this.max,
                width: this.width,
                color: this.color,
                step: this.step,
                markShort: 4,
                markLong: 10,
                textHeight: 5,
                lineBottom:{ mx: 0, my: ruleY, lx: cW, ly: ruleY, color: this.color },
                lineRed :{ mx: this.centerX, my: 40, lx: this.centerX, ly: ruleY+6, color: this.midColor}
            }
            //渲染标尺
            this.$nextTick(() => {
                this.renderRuler(this.ctx);
                this.transToPrice()
            })
        },
        methods: {
            setCanvas(canvas, w, h) {
                canvas.width = w * DPR;
                canvas.height = h * DPR;
                canvas.style.width = `${w}px`;
                canvas.style.height = `${h}px`;
            },
            renderRuler(ctx) {
                this.ruler = new Ruler(this.rulerConfig);
                this.ruler.x = this.currentValue ? this.caculateRulerPos(this.currentValue) : this.caculateRulerPos(this.ruler.min);
                this.start = this.caculateRulerPos(this.ruler.min);
                this.end = Math.round(this.centerX -  this.ruler.max/this.ruler.ratioScale);
                this.ruler.draw(ctx);
            },
            onTouchStart(e) {
                const tStart = e.changedTouches[0];
                OFFSETX = tStart.pageX - this.ruler.x;
                this.touch = {
                    x: this.ruler.x,
                    isPressed: true
                }
            },
            onTouchMove(e) {
                const tMove = e.changedTouches[0];
                this.ruler.x = tMove.pageX - OFFSETX;    // 设置标尺的位置
                this.speed = this.ruler.x - this.touch.x;    // 计算拖动速度
                this.touch.x = this.ruler.x;
                this.transToPrice();
                this.checkBoundaryAndDraw();
            },
            onTouchEnd(e) {
                const self = this;
                this.touch.isPressed = false;
                if(!this.touch.isPressed && Math.abs(this.speed)>=1){
                    (function move() {
                        if(Math.abs(self.speed)>1) {
                            window.requestAnimationFrame(move);
                            self.speed = EaseOut(0, self.speed)
                            self.ruler.x += self.speed;
                            self.transToPrice();
                            self.checkBoundaryAndDraw();
                        }else{
                            if(self.isAttract) {
                                self.ruler.x = self.centerX - self.price/self.ruler.ratioScale;
                                self.drawFrame();
                            }
                            self.$emit(EVENTS.PRICE_CHANGE, self.price)
                            window.cancelAnimationFrame(move);
                        }
                    })()
                }else{
                    this.$emit(EVENTS.PRICE_CHANGE, this.price)
                }
            },
            caculateRulerPos(val) {
                return Math.round(this.centerX -  val/this.ruler.ratioScale);
            },
            transToPrice() {
                let num = Math.round((this.centerX - this.ruler.x) * this.ruler.ratioScale);
                if(this.isAttract) {
                    let n = this.step / 10;
                    let entifyPart = (~~(num/n))*n;
                    num = (num%n > n/2) ?  entifyPart + n : entifyPart;
                }
                if (num < this.min) {
                    this.price = this.min
                }else if (num > this.max){
                    this.price = this.max
                }else{
                    this.price = num
                }
            },
            checkBoundaryAndDraw() {
                if (this.ruler.x > this.start) {
                    this.ruler.x = this.centerX;
                } else if (this.ruler.x < this.end) {
                    this.ruler.x = this.end;
                } else {
                    this.drawFrame()
                }
            },
            drawFrame() {
                this.ctx.clearRect(0, 0, this.W*DPR, this.H*DPR);
                this.ruler.draw(this.ctx);
            },
            repaintCanvas() {
                this.ctx.clearRect(0, 0, this.W*DPR, this.H*DPR);
                this.renderRuler(this.ctx);
                this.transToPrice();
            }
        },
        watch: {
            min(newVal) {
                this.rulerConfig.min = newVal;
                this.repaintCanvas();
            },
            max(newVal) {
                this.rulerConfig.max = newVal;
                this.repaintCanvas()
            },
            defaultValue(newVal) {
                this.currentValue = newVal;
                this.repaintCanvas()
            },
            price(newVal) {
                this.ruler.x = this.centerX - this.price/this.ruler.ratioScale;
                this.drawFrame()
            }
        }
    }
    
</script>

<style scoped>
    .price, .ruler {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    .price input {
        border: none;
        outline: none;
        margin: 0; 
        padding: 0;
        text-align: center;
        position: absolute;
        left: 50%; right: 0;
        transform: translate3d(-50%,0,0);
        -webkit-transform: translate3d(-50%,0,0);
        display: block;
        font-size: 16px;
        z-index: 2;
    }
</style>
