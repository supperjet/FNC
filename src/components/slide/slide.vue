<template>
  <div class="ncf-slide" ref="slide">
    <div class="ncf-slide-group" ref="slideGroup">
      <slot>
        <ncf-slide-item
            v-for="(item, index) in data" :key="index"
            @click.native="clickItem(item, index)"
            :item="item"
        >
        </ncf-slide-item>
      </slot>
    </div>
    <div class="ncf-slide-dots" v-if="showDots">
      <slot name="dots" :current="currentPageIndex" :dots="dots">
        <span :class="{active: currentPageIndex === index}" v-for="(item, index) in dots" :key="index"></span>
      </slot>
    </div>
  </div>
</template>

<script>
  import ncfSlideItem from './slide-item.vue'
  import BScroll from 'better-scroll'

  const COMPONENT_NAME = 'ncf-slide'
  const EVENT_CHANGE = 'change'
  const EVENT_SELECT = 'click'

  const DIRECTION_H = 'H'
  const DIRECTION_V = 'V'
  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      initialIndex: {
        type: Number,
        default: 0
      },
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      threshold: {
        type: Number,
        default: 0.3
      },
      speed: {
        type: Number,
        default: 400
      },
      allowVertical: {
        type: Boolean,
        default: true
      },
      stopPropagation: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: DIRECTION_H
      },
      showDots: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        dots: 0,
        currentPageIndex: this.initialIndex || 0
      }
    },
    created() {
      const needRefreshProps = ['data', 'loop', 'autoPlay', 'threshold', 'speed', 'allowVertical']
      needRefreshProps.forEach((key) => {
        this.$watch(key, () => {
          this.$nextTick(() => {
            this.refresh()
          })
        })
      })
    },
    watch: {
      initialIndex(newIndex) {
        if (newIndex !== this.currentPageIndex) {
          this.slide && this.slide.goToPage(newIndex)
        }
      }
    },
    methods: {
      clickItem(item, index) {
        this.$emit(EVENT_SELECT, item, index)
      },
      refresh() {
        if (this.slide === null) {
          return
        }
        this.slide && this.slide.destroy()
        clearTimeout(this._timer)
        if (this.slide) {
          this.currentPageIndex = 0
        }
        this._updateSlideDom()
        if (this.showDots) {
          this._initDots()
        }
        if (this.currentPageIndex >= this.dots.length) {
          this.currentPageIndex = this.dots.length - 1
        }
        this._initSlide()
        if (this.autoPlay) {
          this._play()
        }
      },
      _refresh() {
        this._updateSlideDom(true)
        this.slide.refresh()
      },
      _updateSlideDom(isResize) {
        this._setSlideStyle(isResize)
      },
      _setSlideStyle(isResize) {
        this.children = this.$refs.slideGroup.children
        const target = this.direction === DIRECTION_H ? 'width' : 'height'
        let allSize = 0
        const slideSize = this.$refs.slide[`client${target[0].toUpperCase() + target.slice(1)}`]
        const len = this.children.length
        for (let i = 0; i < len; i++) {
          const child = this.children[i]
          child.style[target] = slideSize + 'px'
          allSize += slideSize
        }
        if (this.loop && !isResize && len > 1) {
          allSize += 2 * slideSize
        }
        this.$refs.slideGroup.style[target] = allSize + 'px'
      },
      _initSlide() {
        const eventPassthrough = this.direction === DIRECTION_H && this.allowVertical ? DIRECTION_V : ''
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: this.direction === DIRECTION_H,
          scrollY: this.direction === DIRECTION_V,
          momentum: false,
          bounce: false,
          eventPassthrough,
          snap: {
            loop: this.loop,
            threshold: this.threshold,
            speed: this.speed
          },
          stopPropagation: this.stopPropagation,
          click: true,
          observeDOM: false
        })
        this.slide.goToPage(this.currentPageIndex, 0, 0)
        this.slide.on('scrollEnd', this._onScrollEnd)
        const slideEl = this.$refs.slide
        slideEl.removeEventListener('touchend', this._touchEndEvent, false)
        this._touchEndEvent = () => {
          if (this.autoPlay) {
            this._play()
          }
        }
        slideEl.addEventListener('touchend', this._touchEndEvent, false)
        this.slide.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this._timer)
          }
        })
      },
      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        if (this.currentPageIndex !== pageIndex) {
          this.currentPageIndex = pageIndex
          this.$emit(EVENT_CHANGE, this.currentPageIndex)
        }
        if (this.autoPlay) {
          this._play()
        }
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _play() {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.slide.next()
        }, this.interval)
      },
      _deactivated() {
        clearTimeout(this._timer)
        clearTimeout(this._resizeTimer)
        window.removeEventListener('resize', this._resizeHandler)
        const slideEl = this.$refs.slide
        if (slideEl) {
          slideEl.removeEventListener('touchend', this._touchEndEvent, false)
        }
      },
      _resizeHandler() {
        /* istanbul ignore if */
        if (!this.slide) {
          return
        }
        clearTimeout(this._resizeTimer)
        this._resizeTimer = setTimeout(() => {
          /* istanbul ignore if */
          if (this.slide.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this._refresh()
        }, 60)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.refresh()
      })
      window.addEventListener('resize', this._resizeHandler)
    },
    activated() {
      /* istanbul ignore next */
      if (this.autoPlay) {
        this._play()
      }
      window.addEventListener('resize', this._resizeHandler)
    },
    deactivated() {
      /* istanbul ignore next */
      this._deactivated()
    },
    destroyed() {
      this._deactivated()
      if (this.slide) {
        this.slide.destroy()
        this.slide = null
      }
    },
    components: {
      ncfSlideItem
    }
  }
</script>

<style>
  .ncf-slide {
    position: relative;
    min-height: 1px;
    height: 100%;
  }
  .ncf-slide-group {
    position: relative;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  .ncf-slide-dots {
    position: absolute;
    bottom: 2px;
    right: 0;
    left: 0;
    padding: 0 6px;
    font-size: 0;
    text-align: center;
    transform: translateZ(1px);
  }
  .ncf-slide-dots span{
    display: inline-block;
    vertical-align: bottom;
    margin: 0 1px;
    width: 10px;
    height: 2px;
    background: rgba(255,255,255,0.5);
  }
  .ncf-slide-dots span.active{
    background: rgba(255,255,255,0.9)
  }
</style>
