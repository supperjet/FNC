<template>
  <div class="layout">
      <ncf-input
          class="my-input"
          :type="inputOption.type"
          :min="inputOption.min"
          :max="inputOption.max"
          :placeholder="inputOption.placeholder"
          :clearable="inputOption.clearable"
          :disabled="inputOption.disabled"
          :readonly="inputOption.readonly"
          @change="getChangeValue"
          @input="getInputValue"
        >
        <div slot="prepend">大型框: </div>
      </ncf-input>
      <ncf-input
          class="my-input"
          scale="normal"
          :type="inputOption.type"
          :min="inputOption.min"
          :max="inputOption.max"
          :placeholder="inputOption.placeholder"
          :clearable="inputOption.clearable"
          :disabled="inputOption.disabled"
          :readonly="inputOption.readonly"
          @change="getChangeValue"
          @input="getInputValue"
        >
        <div slot="prepend">小型框: </div>
      </ncf-input>
      <ncf-input
          class="my-input"
          mode="bankcard"
          scale="normal"
          :type="inputOption1.type"
          :placeholder="inputOption1.placeholder"
          :clearable="inputOption1.clearable"
          :disabled="inputOption1.disabled"
          :readonly="inputOption1.readonly"
          @change="getChangeValue"
          @input="getInputValue"
        >
        <div slot="prepend">银行卡: </div>
      </ncf-input>

      <ncf-input
          class="my-input"
          mode="phone"
          scale="normal"
          :type="inputOption1.type"
          :placeholder="inputOption1.placeholder"
          :clearable="inputOption1.clearable"
          :disabled="inputOption1.disabled"
          :readonly="inputOption1.readonly"
          @change="getChangeValue"
          @input="getInputValue"
        >
        <div slot="prepend">手机号: </div>
      </ncf-input>

      <ncf-input
          class="my-input"
          mode="amount"
          scale="normal"
          :type="inputOption1.type"
          :placeholder="inputOption1.placeholder"
          :clearable="inputOption1.clearable"
          :disabled="inputOption1.disabled"
          :readonly="inputOption1.readonly"
          @change="getChangeValue"
          @input="getInputValue"
        >
        <div slot="prepend">金额: </div>
      </ncf-input>

      <ncf-input
          class="my-input"
          mode="bankcard"
          scale="normal"
          :offset-right="20"
          :type="inputOption1.type"
          :placeholder="inputOption1.placeholder"
          :clearable="inputOption1.clearable"
          :disabled="inputOption1.disabled"
          :readonly="inputOption1.readonly"
          @change="getChangeValue"
          @input="getInputValue"
        >
        <div slot="prepend">清除按钮的位置: </div>
      </ncf-input>
      <ncf-input
          class="my-input"
          scale="normal"
          :offset-right="80"
          :type="inputOption2.type"
          :placeholder="inputOption2.placeholder"
          :clearable="inputOption2.clearable"
          :disabled="inputOption2.disabled"
          :readonly="inputOption2.readonly"
          @change="getChangeValue"
          @input="getInputValue"
        >
        <div slot="prepend">文本: </div>
      </ncf-input>
    <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
    <button type="button" name="button" @click="handleClearable" class="btn">清除按钮</button>
    <button type="button" name="button" @click="handleDisabled" class="btn">禁用</button>
    <button type="button" name="button" @click="handleReadonly" class="btn">只读</button>
  </div>
</template>
<script>
import NcfInput from '../components/input.vue'
import Toast from '../components/toast/index.js'

const COMPONENT_NAME = 'input-show'

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      inputOption: {
        type: 'number',
        min: 0,
        max: 100,
        placeholder: "请输入金额",
        clearable: true,
        disabled: false,
        readonly: false
      },
      inputOption1: {
        type: 'string',
        placeholder: "请输入卡号",
        clearable: true,
        disabled: false,
        readonly: false
      },
      inputOption2: {
        type: 'string',
        placeholder: "请输入姓名",
        clearable: true,
        disabled: false,
        readonly: false
      }
    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    getChangeValue(e) {
      console.log(e.target.value + " from change ")
    },
    getInputValue(val) {
      console.log(val + "from input")
    },
    handleClearable() {
      this.inputOption.clearable = !this.inputOption.clearable;
      if(this.inputOption.clearable) {
        Toast('添加清除按钮', 'bottom')
      }else{
        Toast('消除清除按钮')
      }
    },
    handleDisabled() {
      this.inputOption.disabled = !this.inputOption.disabled;
      if(this.inputOption.disabled) {
        Toast('禁用')
      }else{
        Toast('解除禁用')
      }
    },
    handleReadonly() {
      this.inputOption.readonly = !this.inputOption.readonly;
      if(this.inputOption.readonly) {
        Toast('只读模式')
      }else{
        Toast('读写模式')
      }
    }
  },
  components: {
    NcfInput,
    Toast
  }
}
</script>
<style scoped>
.layout {
  position: fixed;
  top:0;
  left:0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  padding: 0 15px;
}
.btn{
  width: 100px;
  height: 50px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  outline: none;
  color: #444;
  margin-bottom: 10px;
}
.btn-blue{
  background: #49f;
  color: #fff;
  border: none;
}
.my-input{
  margin-bottom: 16px;
}
</style>
