<template>
  <div class="bulletin" ref="bulletin" v-if="isVisible" @click="hrefTo">
        <div class="trumpet"><i class="icon"></i></div>
        <div class="content">
            <div ref="bulletinCnt_1" v-html="content" class="ctn"></div>
            <div ref="bulletinCnt_2" v-if="swipable" v-html="content" class="ctn"></div>
        </div>
        <div class="close" @click.stop="hide"><i class="icon"></i></div>
    </div>
</template>
<script>
const COMPONENT_NAME = 'bulletin';
const CW = window.innerWidth;

export default {
  name: COMPONENT_NAME,
  props: {
    gap: {
      type: Number,
      default: 100
    },
    content: {
      type: String,
      default: ''
    },
    url: {
      tyle: String,
      default: ''
    },
    speed: {
      type: Number,
      default: 2
    },
    swipable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isVisible: true,
      speed_a: 0,
      speed_b: 0,
      actionStart_a: true,
      actionStart_b: false,
      BULT_W: CW, //公告栏宽度
      CONT_W: 0  //内容宽度
    }
  },
  computed: {
      nana() {
        return Math.round(this.CONT_W / this.BULT_W)+1;
      },
      transLimit() {
        return (this.CONT_W > this.BULT_W) ? this.nana*this.CONT_W : this.nana*(this.BULT_W + this.CONT_W);
      }
  },
  watch: {
    content(newVal, oldVal) {
      this.content = newVal;
      this.timer = setTimeout(() => {
        this.refresh();
      },20)
      
    }
  },
  mounted() {
    this.$bult_1 = this.$refs.bulletinCnt_1;
    this.$bult_2 = this.$refs.bulletinCnt_2;
    this.refresh();
  },
  methods: {
    hide() {
      this.isVisible = false;
    },
    show() {
      this.isVisible = true;
    },
    hrefTo() {
        window.location.href = this.url || '/';
    },
    refresh() {
      this.CONT_W = this.$bult_1.offsetWidth || this.$bult_1.clientWidth;
      this.CONT_W && this.start();
    },
    start(){
      const self = this;
      if (self.swipable) {
        (function moveFrame() {
          window.requestAnimationFrame(moveFrame);
          
          self.action();
        })()
      }else{
        this.$bult_1.style.left = '45px';
      }
    },
    action() {
      this.move_a();
      this.move_b();
    },
    move_a() {
      if(this.actionStart_a) {
          this.$bult_1.style.webkitTransform = `translate3d(${this.speed_a}px, 0, 0)`;
          this.speed_a -= this.speed;
          if(Math.abs(this.speed_a) > this.CONT_W+this.gap) {
              this.actionStart_b = true;
                  if(Math.abs(this.speed_a) > this.transLimit) {
                      this.$bult_1.style.transform = `translate3d(${this.BULT_W}px, 0, 0)`;
                      this.actionStart_a = false;
                      this.speed_a = 0;
                  }
          }
       }
    },
    move_b() {
      if(this.actionStart_b) {
            this.$bult_2.style.transform = `translate3d(${this.speed_b}px, 0, 0)`;
            this.speed_b -= this.speed;
            if(Math.abs(this.speed_b) > this.CONT_W+this.gap) {
                this.actionStart_a = true;
                if(Math.abs(this.speed_b) > this.transLimit) {
                      this.$bult_2.style.transform = `translate3d(${this.BULT_W}px, 0, 0)`;
                      this.actionStart_b = false;
                      this.speed_b = 0;
                }
            }
        }
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
}
</script>
<style scoped>
    .bulletin{
         width: 100%;
         height: 35px;
         position: relative;
         overflow: hidden;
         font-size: 14px;
         background: #ffe3c1;
    }
    .bulletin .trumpet,
    .bulletin .close{
        position: absolute;
        width: 35px;
        height: 100%;
        text-align: center;
        background: #ffe3c1;
        z-index: 10;
    }
    .bulletin .close .icon,
    .bulletin .trumpet .icon{
      display: block;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 50% 50%;
    }
    .bulletin .trumpet{
        top:0;
        left:0;
    }
    .bulletin .close{
        top:0;
        right:0;
    }
    .bulletin .content{
        width:100%;
        height:100%;
        overflow: hidden;
    }
   .bulletin .content div{
        height:100%;
        position: absolute;
        left: 100%;
        z-index: 9;
        line-height: 35px;
        color: #f38d27;
        font-weight: 200;
        overflow: hidden;
        white-space: nowrap;
  }
  .bulletin .close .icon {
    background-image: url(data:image/png;base64,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);
  }
  .bulletin .trumpet .icon {
    background-image: url(data:image/png;base64,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)
  }
</style>
