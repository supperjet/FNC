<script>
    export default {
        functional: true,
        name: "ncf-transitions",
        render(h, context) {
            return h("transition", context.data, context.children);
        }
    };
</script>

<style>
.ncf-bounce-enter-active {
    animation: bounce-in 300ms linear;
}
.ncf-bounce-leave-active {
    animation: zoom-out 250ms linear;
}

.ncf-zoom-enter, .ncf-zoom-leave-to {
    opacity: 0.01;
    transform: scale(0.75);
}
.ncf-zoom-enter-active {
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ncf-zoom-leave-active {
    transition: all 250ms linear;
}

.ncf-punch-enter, .ncf-punch-leave-to {
    opacity: 0.01;
    transform: scale(1.35);
}
.ncf-punch-enter-active{
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ncf-punch-leave-active{
    transition: all 250ms linear;
}

.ncf-slide-up-enter, .ncf-slide-up-leave-to {
    transform: translate3d(0, 100%, 0);
}
.ncf-slide-up-enter-active{
    transition: transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1)
}
.ncf-slide-up-leave-active{
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1)
}

.ncf-slide-right-enter, .ncf-slide-right-leave-to{
    transform: translate3d(-100%, 0, 0)
}
.ncf-slide-right-enter-active{
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1)
}
.ncf-slide-right-leave-active{
    transition: transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1)
}

.ncf-slide-left-enter, .ncf-slide-left-leave-to{
    transform: translate3d(100%, 0, 0)
}
.ncf-slide-left-enter-active{
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1)
}
.ncf-slide-left-leave-active{
    transition: transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1)
}

.ncf-slide-down-enter, .ncf-slide-down-leave-to{
    transform: translate3d(0, -100%, 0)
} 
.ncf-slide-down-enter-active{
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1)
}
.ncf-slide-down-leave-active{
    transition: transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1)
} 

.ncf-fade-enter, .ncf-fade-leave-to{
    opacity: 0.01;
}
.ncf-fade-enter-active{
    transition: opacity 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ncf-fade-leave-active{
    transition: opacity 250ms linear;
}

.ncf-fade-up-enter, .ncf-fade-up-leave-to{
    opacity: 0.01;
    transform: translate3d(0, 30%, 0);
}  
.ncf-fade-up-enter-active{
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ncf-fade-up-leave-active{
    transition: all 250ms linear;
}  

.ncf-fade-down-enter, .ncf-fade-down-leave-to{
    opacity: 0.01;
    transform: translate3d(0, -30%, 0);
}
.ncf-fade-down-enter-active{
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ncf-fade-down-leave-active{
    transition: all 250ms linear;
}
    

.ncf-fade-right-enter, .ncf-fade-right-leave-to{
    opacity: 0.01;
    transform: translate3d(-30%, 0, 0);
}
.ncf-fade-right-enter-active{
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
} 
.ncf-fade-right-leave-active{
    transition: all 250ms linear;
}
   
.ncf-fade-left-enter, .ncf-fade-left-leave-to{
    opacity: 0.01;
    transform: translate3d(30%, 0, 0);
}
.ncf-fade-left-enter-active{
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
}  
.ncf-fade-left-leave-active{
    transition: all 250ms linear;
}
    
.ncf-fly-enter-active{
    animation: fly-in 600ms;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
} 
.ncf-fly-leave-active{
    animation: zoom-out 250ms;
}
    
@keyframes fly-in {
  0% {
    opacity: 0.5;
    transform: scale(0.5) translate3d(0, 50px, 0);
  }
  45% {
    opacity: 1;
    transform: scale(1.05) translate3d(0, -50px, 0);
  }
  100% {
    transform: scale(1) translate3d(0, 0, 0);
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  45% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes zoom-out{
  to {
    opacity: 0.01;
    transform: scale(0.75);
  }
}
</style>

