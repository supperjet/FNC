import Vue from 'vue'
import LoadingOptions from './loading.vue'
const LoadingConstructor = Vue.extend(LoadingOptions)

function Loading(content='加载中', mask=false, parentNode = document.body) {
    let vm = Loading._instance
    if(!vm) {
        vm = Loading._instance = new LoadingConstructor({
            propsData: {
                content,
                mask
            }
        }).$mount()
        parentNode.appendChild(vm.$el)
    }
    vm.mask = mask
    vm.content = content
    return vm
}


Loading._instance = null

export default Loading