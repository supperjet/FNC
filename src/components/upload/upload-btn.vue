<template>
  <div class="ncf-upload-btn">
    <slot>
      <div class="ncf-upload-btn-def"><i>+</i></div>
    </slot>
    <input class="ncf-upload-input" type="file" @change="changeHandler" :multiple="multiple" :accept="accept">
  </div>
</template>
<script>
const COMPONENT_NAME = 'ncf-upload-btn';

export default {
  name: COMPONENT_NAME,
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: 'image/*'
    }
  },
  methods: {
    changeHandler(e) {
      const fileEle = e.currentTarget;
      const files = fileEle.files;
      if(files) {
        this.$parent.addFiles(files);
        fileEle.value = null;
      }
    }
  }
}
</script>
<style scoped>
  .ncf-upload-btn{
    position: relative;
    overflow: hidden;
    height: 150px;
  }
  .ncf-upload-btn:active .ncf-upload-btn-def{
    background-color: rgba(0,0,0,.04);
  }
  .ncf-upload-input{
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    width:100%;
    font-size: 0;
    opacity: 0;
  }
  .ncf-upload-btn-def{
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    border: 0.5px solid #eee;
    text-align: center;
    line-height: 2.0;
  }
  .ncf-upload-btn-def i{
    font-style: normal;
    font-size: 60px;
    color: #d0d0d0;
  }
</style>
