<template>
  <div class="ncf-amount-input">
    <div class="title">
      <slot name="title">金额</slot>
    </div>
    <div class="zone">
      <ncf-input
        ref="amount_input"
        class="amount-input"
        :type="inputOption.type"
        :placeholder="inputOption.placeholder"
        :min="inputOption.min"
        :max="inputOption.max"
        :value="inputOption.value"
        :autofocus="inputOption.autofocus"
        @change="_listenValueChange"
        @input="_listenValueInput"
      >
      <i class="label" slot="prepend"></i>
      </ncf-input>
      <div v-if="isOutAll" class="outAll" @click="handleOutAll">全部</div>
    </div>
    <div class="amount-footer" v-if="$slots.footerTips || needFooter">
      <slot name="footerTips">
         <span class="footer-tips">快速提现, 预计2小时内到账</span>
      </slot>
    </div>
  </div>
</template>
<script>
import NcfInput from '../components/input.vue'
const COMPONENT_NAME = 'amount'
const EVENTS = {
  VALUE_CHANGE: 'value-change',
  VALUE_INPUT: 'value-input'
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
      default: 100
    },
    placeholder: {
      type: String,
      default: '请输入提现金额'
    },
    needFooter: {
      type: Boolean,
      default: true
    },
    isOutAll: {
      type: Boolean,
      default: true
    },
    allAmount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      inputOption: {
        type: 'number',
        value: '',
        min: this.min,
        max: this.max,
        placeholder: this.placeholder,
        autofocus: true
      }
    }
  },
  methods: {
    _listenValueChange(e) {
      const val = e.target.value
      this.$emit(EVENTS.VALUE_CHANGE, val)
    },
    _listenValueInput(val) {
      this.$emit(EVENTS.VALUE_INPUT, val)
    },
    handleOutAll() {
      if(this.allAmount) {
        this.$refs.amount_input.setValue(allAmount)
      }else{
        console.error(`[NCF]:请传入总金额参数allAmount`)
      }
    }
  },
  components: {
    NcfInput
  }
}
</script>
<style scoped>
 .ncf-amount-input{
   padding-top: 20px;
   box-sizing: border-box;
   overflow: hidden;
   background:#fff;
 }
 .ncf-amount-input .title{
   font-size: 16px;
   color:#666;
   margin-left: 15px;
   margin-bottom: 10px;
 }
 .ncf-amount-input .amount-input{
   margin-left: 15px;
   box-sizing: border-box;
 }
 .ncf-amount-input .amount-input .label {
   display: block;
   width: 25px;
   height: 28px;
   background-position: center center;
   background-repeat: no-repeat;
   background-size: contain;
   background-image: url(data:image/png;base64,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)
 }
 .ncf-amount-input .zone{
   margin-bottom: 10px;
   position: relative;
 }
 .ncf-amount-input .amount-input .ncf-input-field {
   border: none;
 }
 .ncf-amount-input .amount-footer {
   margin-left: 15px;
   padding: 8px 0;
   font-size: 12px;
   color: #999;
   position: relative;
 }
 .ncf-amount-input .outAll{
   position: absolute;
   top:50%;
   right: 15px;
   color: #5c8ae5;
   font-size: 12px;
   transform: translateY(-50%);
   -webkit-transform: translateY(-50%);
 }
 .ncf-amount-input .amount-footer:after{
   content: ' ';
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 1px;
   background-image: -webkit-linear-gradient(0deg, #eee 50%, transparent 50%);
   background-image: linear-gradient(0deg, #eee 50%, transparent 50%);
 }
</style>
