<template>
    <div>
        <div class="ncf-tip-tag" ref="tag" @click.stop="pop">
            <slot></slot>
        </div>
        <div class="ncf-tip-wrap" 
                ref="tip"
                :style="{
                    left: x + 'px', 
                    top: y + 'px',
                    visibility: show ? 'visible' : 'hidden'
                }"
            >
            <div class="ncf-tip-box">
                <div class="ncf-tip-title" v-if="isTitle" v-html="title"></div>
                <div class="ncf-tip-content" v-if="!$slots.content" v-html="cnt"></div>
                <div class="ncf-tip-content" v-else><slot name="content"></slot></div>
                <div :class="tipCls"
                     class="ncf-tip-arrow"
                     :style="{left: arrowLeft + 'px', top: arrowTop + 'px'}"
                ></div>
            </div>
        </div>
    </div>
</template>
<script>
const COMPONENT_NAME = "ncf-tip";
const EVENTS = {
    HIDE: 'tip-hide'
}
export default {
  name: COMPONENT_NAME,
  props: {
    isTitle: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: "this is a test!"
    },
    placement: {
      type: String,
      default: "top"
    },
    arrawOffsetTop: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      cnt: this.content,
      show: false,
      arrowLeft: 0,
      arrowTop: 0,
      x: 0,
      y: 0
    };
  },
  computed: {
    tipCls() {
      if (["top", "left", "bottom", "right"].indexOf(this.placement) != -1) {
        return `ncf-tip-arrow-${this.placement}`;
      } else {
        return `ncf-tip-arrow-top`;
      }
    }
  },
  watch: {
    content(newVal, oldVal) {
      this.cnt = newVal
      setTimeout(()=>{
        this.refrensh()
      },20)
    }
  },
  methods: {
    hide() {
      this.show = false
    },
    refrensh() {
      this.init()
    },
    init() {
        this.$tag = this.$refs.tag;
        this.$tip = this.$refs.tip;
        const tagW = this.$tag.offsetWidth || this.$tag.clientWidth;
        const tagH = this.$tag.offsetHeight || this.$tag.clientHeight;
        const tagL = this.$tag.offsetLeft;
        const tagT = this.$tag.offsetTop;
        const tipW = this.$tip.offsetWidth || this.$tip.clientWidth;
        const tipH = this.$tip.offsetHeight || this.$tip.clientHeight;
        const tipL = this.$tip.offsetLeft;
        const tipR = this.$tip.offsetTop;

        switch(this.placement) {
            case 'top':
                this.x = tagL;
                this.y = tagT - tipH - 5;
                this.arrowLeft = tagW / 2;
                this.arrowTop = tipH - 2;
                break;
            case 'bottom':
                this.x = tagL;
                this.y = tagT + tagH + 5;
                this.arrowLeft = tagW / 2; 
                this.arrowTop =  -5;
                break;
            case 'left':
                this.x = tagL-tipW - 5;
                this.y = tagT;
                this.arrowLeft = tipW + 3; 
                this.arrowTop =  this.arrawOffsetTop;
                break;
            case 'right':
                this.x = tagL + tagW + 6;
                this.y = tagT;
                this.arrowLeft = 0; 
                this.arrowTop =  this.arrawOffsetTop;
                break;
        }
    },
    pop() {
        if (this.show) { 
            this.show = false
            this.$emit(EVENTS.HIDE)
            return
        }
        this.init()
        this.show = true
    }
  }
};
</script>

<style>
.ncf-tip-tag {
  display: inline-block;
  padding: 0;
  margin: 0;
}
.ncf-tip-wrap {
  position: absolute;
}
.ncf-tip-box {
  position: relative;
  max-width: 260px;
  min-width: 65px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #fff;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 1px 10px hsla(0, 0%, 39%, 0.3);
  font-size: 12px;
}
.ncf-tip-title {
  padding: 0 15px;
  line-height: 32px;
  height: 32px;
  border-bottom: 1px solid #e9e9e9;
  color: #666;
}
.ncf-tip-content {
  padding: 8px 15px;
  /* color: #ff8c1a; */
  word-break: break-all;
}
.ncf-tip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  margin-left: -5px;
}
.ncf-tip-arrow::after {
  content: " ";
  margin-left: -4px;
  border: 4px solid transparent;
  position: absolute;
  width: 0;
  height: 0;
}

.ncf-tip-arrow-top {
  border-bottom-width: 0;
  border-top-color: #fff;
  bottom: -5px;
}
.ncf-tip-arrow-top:after {
  border-top-color: #fff;
  bottom: -3px;
}
.ncf-tip-arrow-bottom {
  border-top-width: 0;
  border-bottom-color: #fff;
  top: -5px;
}
.ncf-tip-arrow-bottom::after {
  border-bottom-color: #fff;
  top: -3px;
}
.ncf-tip-arrow-right {
  border-left-width: 0;
  border-right-color: #fff;
}
.ncf-tip-arrow-right::after {
  border-right-color: #fff;
  top: -4px;
  left: 1px;
}
.ncf-tip-arrow-left {
  border-right-width: 0;
  border-left-color: #fff;
}
.ncf-tip-arrow-left::after {
  border-left-color: #fff;
  right: -3px;
  top: -4px;
}
</style>
