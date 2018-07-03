<template>
  <div class="ncf-input">
    <div class="ncf-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div style="position:relative;display:inline-block;">
      <input
        class="ncf-input-field"
        :class="{'normal': scale == 'normal'}"
        v-model="inputValue"
        ref="input"
        v-bind="$props"
        :type="_type"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
   </div>
    <div class="ncf-input-append" v-if="$slots.append || _showClear" :style="{right: offsetRight+'px'}">
        <div class="ncf-inout-clear" v-if="_showClear" @click="handleClear">
          <i class="ncf-wrong"></i>
        </div>
        <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
const COMPONENT_NAME = 'ncf-input'
const MODE_TYPE = ['bankcard', 'phone', 'amount']
const EVENTS = {
  INPUT: 'input',
  CHANGE: 'change',
  BLUR: 'blur',
  FOCUS: 'focus'
}
//格式化手机号码 344
const formatPhone = function(mobile) {
    let value = mobile.replace(/\D/g, '').substring(0, 11);
    let valueLen = value.length;
    if (valueLen > 3 && valueLen < 8) {
      value = value.replace(/^(...)/g, "$1 ");
    } else if (valueLen >= 8) {
      value = value.replace(/^(...)(....)/g, "$1 $2 ");
    }
    return value;
}
//数字千分位
const numberWithCommas = function(x) {
 	var parts = x.toString().split(".");
 	parts[0] = parts[0].replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
//去除所有空格
const removeAllSpace = function(str) {
    return str.replace(/\s+/g, "");
}
//去除所有的逗号
const removeAllCommas = function (str) {
    return str.replace(/\,+/g, "");
}

export default {
  name: COMPONENT_NAME,
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: ''
    },
    scale: {
      type: String,
      default: ''
    },
    placeholder: String,
    name: String,
    id: String,
    minlength: Number,
    maxlength: Number,
    min: Number,
    max: Number,
    step: Number,
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    offsetRight: {
      type: Number | String,
      default: 80
    }
  },
  data() {
    return{
      inputValue: this.value,
      isFocus: false
    }
  },
  computed: {
    _type() {
      const type = this.type;
      return type;
    },
    _showClear() {
      return this.clearable && this.inputValue && !this.readonly && !this.disabled
    }
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue
    },
    inputValue(newValue) {
      if(this.mode) {
        if(['bankcard', 'phone'].indexOf(this.mode) != -1) {
          this.inputValue = newValue
          this.formateValue(this.inputValue)
          this.$emit(EVENTS.INPUT, removeAllSpace(newValue))
        }else{
          this.inputValue = removeAllCommas(newValue);
          this.formateValue(this.inputValue)
          this.$emit(EVENTS.INPUT, removeAllCommas(newValue))
        }
      }else{
        this.inputValue = newValue
        this.$emit(EVENTS.INPUT, newValue)
      }
    }
  },
  methods: {
    formateValue(val) {
      if(this.mode) {
        if(this.type == "string"){
          switch (this.mode) {
            case MODE_TYPE[0]: 
              this.inputValue = (val).replace(/\D/g, '').replace(/....(?!$)/g, '$& ')
              break;
            case MODE_TYPE[1]:
              this.inputValue = formatPhone(val)
              break;
            case MODE_TYPE[2]:
              this.inputValue = numberWithCommas(val)
              break;
            default:
              this.inputValue = val
              break;
          }
        }else{
          console.error('[NCF]:'+ '银行卡号、手机号、金额的 type 需要为 string')
          return
        }
      }
    },
    handleChange(e) {
      this.$emit(EVENTS.CHANGE, e)
    },
    handleFocus(e) {
      this.$emit(EVENTS.FOCUS, e)
      this.isFocus = true
    },
    handleBlur(e) {
      this.$emit(EVENTS.BLUR, e)
      this.isFocus = false
    },
    handleClear(e) {
      this.inputValue = ''
      this.$refs.input.focus()
    },
    setValue(val) {
      this.inputValue = val
      this.$refs.input.focus()
    }
  }
}
</script>
<style scoped>
.ncf-input {
  width: 100%;
  position: relative;
  font-size: 0;
}
.ncf-input-field::-webkit-input-placeholder {
  color: #d8d8d8;
  font-size: 16px;
  line-height: 1.5;
}
.ncf-input .ncf-input-prepend,
.ncf-input .ncf-input-field,
.ncf-input .ncf-input-append {
  display: inline-block;
  vertical-align: middle;
}
.ncf-input-prepend {
  font-size: 14px;
}
.ncf-input-field {
  border: none;
  outline: none;
  width: 10.5rem;
  line-height: 1.429;
  height: 50px;
  font-size: 32px;
  outline: none;
  padding-left: 10px;
  border-radius: 4px;
  -webkit-apperance: none;
  color: #333;
}
.ncf-input-field.normal {
  border: none;
  outline: none;
  width: 10.5rem;
  line-height: 1.429;
  height: 25px;
  font-size: 16px;
  outline: none;
  padding-left: 10px;
  border-radius: 4px;
  -webkit-apperance: none;
  color: #333;
}
.ncf-input-field:disabled {
  background-color: #eee;
}
.ncf-inout-clear {
  display: block;
  width: 18px;
  height: 18px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAAtRJREFUSA3NlT1vE0EQhn1nByigQUEKkdIARaABbIs+oggVAiT6/AWKIIqUFIj8B+QeCRA0VNBQ2pZocJAwEgQRCq6CIh/Y5nmXndGec3IHYqW9+Xpndmb242q1qtHr9c4HvZjJZJKVQFm3252YJjcGOgw48Dl+IzO02+0soEwphYwK45GTmEMA58z7EHVXs2RZttlqte7mhLiNsIehyPP8EomsC9RA+QjhKPTKeDx+ZZ45ypMoP0HfojxwAxlIuBMVC5ayp2tIrQl/nyiLRHkOvxadA8Qdkvp+YWkE65/PDuQ0AW5RxdPQKcDvE8B3La+KAF0QWDZWeyJqG9CVoAHwGgGWqfQlEQeoimCIH0+J/XhIlNCjFGC8FW3y36OekpYg9zlIh2Kvk95X+A1SeSybDXeYVQPF1wkyllNwAHwzti303KJBfU+s6NBW6zFRrqr/0aEANIduXzLp6gT4PojX5ryj/3tyAjwPaAfdkWDkuIimRyDqa2+azeZ8v9+/iPOCKaFhx22nTa80QmRbyQzQF+LNYSiBbpxSGrCKPJAT9DNTY00fbytAv+EypIPCw32Tzh0k4PQBcla8DcDhWJv8/9FSCWl68bRsoiuVlGIiP6TMdd3eClu5RwLMOrNVAVJd2nzT2zaHm6NN4KTZpd4mq0a9Xr8MuPQKROdCNmGQt6WTr2IwdQvD8AWQOsy0HUtU82U0Gu3qMMY7ooXCCyydbMKgW2LaUIyOCb4HAH+QwXEzTNFvyCsE3ZKeDJchr5npVZEpDFr1k8pOSPAKCK4HpWoUOKwquAJritdjCriqdWqVx/IFAG9MRT+wVwCHfQLrCupVHojXNVSbYuv8FxRjeCxvkQy0yR6yiKt9hFlkHjPFFN1FVrZnTE+1pZtZWkAgss15ih5A7TSZ70yqI8ozdg8anl4DH1rADKK0QsftRpxtnFWN9Vg/t2eatGq6RYL9m/EbEnFWXJN2UdgAAAAASUVORK5CYII=);
}
.ncf-input-append {
  position: absolute;
  right: 80px;
  top: 50%;
  margin-left: 5px;
  vertical-align: middle;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}
</style>
