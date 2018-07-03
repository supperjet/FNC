import Vue from 'vue'
import DialogOptions from './dialog.vue'
const DialogConstructor = Vue.extend(DialogOptions)

function Dialog({mode='alert', 
                 title="", 
                 content="",
                 needBtns=true,
                 confirmTxt="确定",
                 cancelTxt="取消",
                 maskable=true,
                 ok=function(){},
                 parentNode=document.body
                }){
    let vm = Dialog._instance
    if(!vm) {
        vm = Dialog._instance = new DialogConstructor({
            propsData: {
                mode,
                title,
                content,
                needBtns,
                confirmTxt,
                cancelTxt,
                maskable,
                ok
            }
        }).$mount()
        parentNode.appendChild(vm.$el)
    } 

    vm.mode = mode 
    vm.title =  title 
    vm.content = content
    vm.needBtns = needBtns
    vm.confirmTxt = confirmTxt 
    vm.cancelTxt = cancelTxt
    vm.maskable = maskable
    vm.ok = ok 

    vm.show()

    return vm
}

Dialog._instance = null

export default Dialog