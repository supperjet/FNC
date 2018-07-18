<template>
    <transition name="ncf-loading-fade">
        <ncf-popup type="loading" :mask="mask" v-show="isVisible" :position="position">
          <div class="ncf-loading-container">
            <base-loading bgColor="#fff" size="21"></base-loading>
            <div class="ncf-loading-tip">{{content}}</div>
          </div>
        </ncf-popup>
    </transition>
</template>

<script>
   import ncfPopup from "../popup.vue"
   import apiMixin from "../mixin/api.js"
   import baseLoading from "./loading_icon.vue"

   const COMPONENT_NAME = "toast";

   export default {
       name: COMPONENT_NAME,
       mixins: [apiMixin],
       data() {
         return {
           position: 'center',
         }
       },
       props: {
           content: {
               type: String,
               default: "加载中"
           },
           mask: {
               type: Boolean,
               default: false
           }
       },
       components: {
           ncfPopup,
           baseLoading
       }
   }
</script>

<style scoped>
.ncf-popup{
    z-index: 900
}
.ncf-loading-container{
   background: rgba(0,0,0,.7);
   border-radius: 4px;
   text-align: center;
   padding: 9px 12px 5px 12px;
   box-sizing: border-box;
   width: 60px;
   margin: 0 auto;
}
.ncf-loading-tip{
    font-size: 12px;
    overflow: hidden;
    color: #c3c0c0;
    margin-top: 5px;
    font-weight: 200;
}
.ncf-loading-fade-enter-active {
      animation: toast-in .3s
}
.ncf-loading-fade-leave-active {
      animation: toast-out .4s
}

@keyframes toast-in {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}
@keyframes toast-out {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}
</style>
