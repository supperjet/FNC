import Vue from  'vue'
import ToastOptions from './toast.vue'
const ToastConstructor = Vue.extend(ToastOptions)

function Toast(content='', pos="center", duration=1000, parentNode = document.body) {
    let args = [...arguments];
    if(typeof args[1] == 'number') {
        pos = '';
        duration = args[1]
    }
    let vm = Toast._instance
    if(!vm) {
        vm = Toast._instance = new ToastConstructor({
            propsData: {
                content,
                duration,
                pos
            }
        }).$mount()
        parentNode.appendChild(vm.$el)
    }
   
    vm.content = content
    vm.duration = duration
    vm.pos = pos
    vm.show()

    return vm
}

Toast._instance = null

export default Toast