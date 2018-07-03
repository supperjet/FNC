<template>
    <transition name="ncf-toast-fade">
        <ncf-popup type="toast" :mask="mask" v-show="isVisible" :position="position">
          <div class="ncf-toast-container">
            <div v-if="needIcon">
                <i v-show="!isLoading" class="ncf-toast-icon" :style="bgImg"></i>
                <ncf-loading v-show="isLoading" :size="24" :bgColor="loadingColor"></ncf-loading>
            </div>
            <div class="ncf-toast-tip">{{txt}}</div>
          </div>
        </ncf-popup>
    </transition>
</template>

<script>
   import ncfPopup from "./popup.vue"
   import apiMixin from "./mixin/api.js"

   const COMPONENT_NAME = "toast";

   export default {
       name: COMPONENT_NAME,
       mixins: [apiMixin],
       data() {
         return {
           position: 'center',
           loadingColor: '#fff',
           txt: "正在加载中"
         }
       },
       props: {
           mask: {
               type: Boolean,
               default: true
           },
           needIcon: {
               type: Boolean,
               default: false
           },
           isLoading: {
               type: Boolean,
               default: true
           },
           bgUrl: {
               type: String,
               default: ''
           },
           limitTime: {
             type: Number | String,
             default: 1000
           }
       },

       computed: {
           bgImg() {
               if(!this.bgUrl) {
                   return {}
               }else{
                   return {
                       backgroundImage: `url(${this.bgUrl})`
                   }
               }
           }
       },

       methods: {
          show() {
              this.isVisible=true
              if(this.limitTime) {
                  setTimeout(()=>{
                      this.hide()
                  }, this.limitTime)
              }
          },
          hide() {
              this.isVisible=false
          },
          setContent(str) {
              this.txt = str
              this.show()
              return this
          }
       },
       components: {
           ncfPopup,
       }
   }

</script>

<style scoped>
.ncf-toast.ncf-popup{
    z-index: 900
}
.ncf-toast-icon {
    width: 24px;
    height: 24px;
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
.ncf-toast-container{
   width: 150px;
   height: 50px;
   background: rgba(0,0,0,.7);
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 4px;
}
.ncf-toast-tip{
    line-height: 20px;
    font-size: 14px;
    max-width: 12em;
    max-height: 40px;
    overflow: hidden;
    margin-left: 8px;
    color: #fff;
}
.ncf-toast-fade-enter-active {
      animation: toast-in .3s
}
.ncf-toast-fade-leave-active {
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
