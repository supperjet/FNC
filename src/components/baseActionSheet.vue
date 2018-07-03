<template>
    <ncf-popup
      :center="false"
      v-show="isVisible"
      @touchmove.prevent="noop"
      @click="cancel"
      @mask-click="onMastclick">
      <transition name="ncf-action-sheet-move">
        <div class="ncf-action-sheet-panel ncf-safe-area-pb" v-show="isVisible" @click.stop="noop">
          <div class="ncf-action-sheet-header border-bottom-1px" v-show="isNeedHeader">
            <div class="header-cancel" v-if="isNeedHeaderCancel" @click="cancel"></div>
            <div class="title">
              <slot name="header">
                 <div>锄禾日当午</div>
              </slot>
            </div>
          </div>
          <div class="ncf-action-sheet-content">

            <slot name="content">
                <h2>this is action sheet content</h2>
                <h3>this is action sheet content</h3>
                <h2>this is action sheet content</h2>
                <h3>this is action sheet content</h3>
            </slot>

          </div>
          <div class="ncf-action-sheet-footer border-top-1px" v-show="isNeedFooter">
            <slot name="footer">
               <div class="ncf-action-sheet-cancel" @click="cancel"><span>取消</span></div>
            </slot>
          </div>
        </div>
      </transition>
    </ncf-popup>
</template>

<script>
import NcfPopup from "./popup.vue";
import apiMixin from "./mixin/api.js";

const COMPONENT_NAME = "ncf-action-sheet";
const EVENTS = {
    CANCEL: 'cancel'
}
export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    isNeedHeader: {
        type: Boolean,
        default: true
    },
    isNeedFooter: {
        type: Boolean,
        default: true
    },
    isNeedHeaderCancel: {
        type: Boolean,
        default: true
    }
  },
  methods: {
    noop() {},
    cancel() {
      this.hide();
      this.$emit(EVENTS.CANCEL);
    },
    onMastclick() {
      this.hide();
    }
  },
  components: {
    NcfPopup
  }
};
</script>

<style scoped>
  .ncf-action-sheet-panel{
      text-align: center;
      font-size: 14px;
      background-color: #fff;
  }
  .ncf-action-sheet-move-enter,
  .ncf-action-sheet-move-leave-active{
      transform: translate3d(0, 100%, 0)
  }
  .ncf-action-sheet-move-enter-active,
  .ncf-action-sheet-move-leave-active{
      transition: all .4s;
  }
  .ncf-action-sheet-header{
      position: relative;
      display: block;
      padding: 18px 15px;
      margin: 0;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      font-size: 16px;
      font-weight: normal;
      line-height: 1;
      color: #333;
      background-color: #fff;
  }
  .ncf-action-sheet-footer{
      position: relative;
      padding: 12px 15px;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      font-size: 16px;
      color: #333;
      background-color: #fff;
  }
  .ncf-action-sheet-header .header-cancel{
    position: absolute;
    width: 15px;
    height: 15px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADICAMAAAB1RDWSAAAAbFBMVEUAAACampqYmJiZmZmYmJiZmZmZmZmYmJiZmZmYmJiZmZmYmJiZmZmZmZmbm5uZmZmYmJiYmJiampqampqZmZmZmZmZmZmZmZmampqXl5eZmZmZmZmZmZmZmZmYmJiZmZmXl5eampqZmZmZmZmis1DZAAAAI3RSTlMACpvGZJRLt2u9savd6SYWpEQQUePN144cINKIeXFe81sygv0IAgkAAAPwSURBVHja3dvtTupAGEXhDcJBEJFPQUUrzv3f42kRgkeYbTmAzJr1h6QJpA/zQtpSVNWYDKchzJYD0RqsHvSlURE2LUVqVL3/oRiOtKkVdn0I07j5fa9X4WsvgjS439vr5/BPcyFaQ3b92S3JrrYAfYOEqaR2KKMN2Baya1INF4+yDwlD6XMj6rNyABJmUj/QKIcgoS91ywfUgB2EhDvpNazDfIMdhoSl9FCEABqwCCSMVC0KaFVikBtVDQNmVWKQYqF1SwolBgl/tOmWMWBRyERCURwERXEQFMVBUBQHQVEcBEVxEBTFQVAUB0FRHARFcRAUxUFQFAdBURwERXEQFOXJQFCUp2n8xApFcRAUxUFQFAdBURwERXEQFMVBUBQHQVEcBEVxEBTFQVAUB0FRHARFWRgIirLoG8gFKU0aRGrFKDSIodAghkKDGAoNYig0iKHQIIZCgxgKDWIoNIih0CCGQoNcgPJQG5I45RhI0pTjIAlTjoUkSzkekijl+hBDoUEMhQYxFBrEUGgQQ6FBDIUGMRQaxFBoEEOhQQzFQB5ThBjK0ZCRrpen0CCGQoMYCg1iKDSIodAghkKDGAoNYig0iKHQIIZCgxgKDWIoNEj8FoT7NI9+/2NVaCuypuQCkd5ygZSUXCAlJRdISckFUlJygZSUXCAlJRdISckFUlJygWg8jUBmDaEaP4dYXRSlgmRBqSBZUCpIFpQtxFFEaAuxdZR+FSQLSgXJglJBsqBUkCwo41kIWVCikBsYJQp51x2KYiBCURwERXEQFMVBUBQHQVEcBEWJQlpSLUpPaeQgKIqDoCgOgqI0DARFadzEISiKgcTrJUhxEBQlCrmVUBQHQVEcBEVxEBTFQVAUB0FRHORkyp1MvwV5lVAUB0FRHARFcRAUxUFQlDNDpE5NSvKQK1A8ZCmhKA6CojgIiuIgKIqDoCgOgqI4yEUpw9+CfEgoShTyIqEoDoKiOAiK4iAoSqNrIOeuG6PQIGoYyqVeeq51GMrPEAilDgRBqQcBUOpCkqfUhyROOQaSNOUEyCUpzfO9VFsHS5ZyPCRRyvUh56IkADkPpZMCxJxONGEQR4FBTqV0TnlySpSkII4CgzgKDOIoMIijwCCOAoMYSvvYy2ZXL06BQRwFBnEUGKQ+pZc6xFFgEEeBQepQmgzIzz/bjq5+E9/plJXKxvcYSJzSb0i6BUHilHdJQxIkSmlLekZBYpQbSfcsiDQ+RHmU1IVBDlO6kuY0yMEBe5H0Hq7+x4kzUAbV1j4Osk/pqmrFg+xRVlrXSvlYq9aV/Ik2rbYDVryJU6sIn80Gu43jj95j0e/Mn0Rq8dorQtEZad1fIHK5ixdEOgwAAAAASUVORK5CYII=)
  }
  .ncf-action-sheet-header .title{
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }
  .ncf-action-sheet-content{
       overflow: hidden;
       background: #fff;
  }
  .border-bottom-1px:after{
    content: '';
    position: absolute;
    left:0;
    bottom:0;
    width:100%;
    height: 1px;
    background-image: linear-gradient(90deg, #eee 50%, transparent 50%);
    background-image: -webkit-linear-gradient(90deg, #eee 50%, transparent 50%);
  }
  .border-top-1px:after{
    content: '';
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height: 1px;
    background-image: linear-gradient(90deg, #eee 50%, transparent 50%);
    background-image: -webkit-linear-gradient(90deg, #eee 50%, transparent 50%);
  }
</style>
