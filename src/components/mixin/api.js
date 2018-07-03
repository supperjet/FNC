// 组件的显示隐藏功能作为公共模块提取出来
export default {
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    show() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    }
  }
}
