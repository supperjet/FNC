import Vue from  'vue'
import NoticeBarOptions from './noticeBar.vue'
const NoticeBarConstructor = Vue.extend(NoticeBarOptions)

function Notice(content='test', noticeType="normal",duration=2000,autoClose=true, parentNode = document.body) {
    let vm = Notice._instance
    if(!vm) {
        vm = Notice._instance = new NoticeBarConstructor({
            propsData: {
                content,
                noticeType,
                autoClose,
                duration
            }
        }).$mount()
        parentNode.appendChild(vm.$el)
    }
   
    vm.content = content
    vm.noticeType = noticeType
    vm.duration = duration
    vm.autoClose = autoClose
    vm.show()

    return vm
}

Notice._instance = null

export default Notice