<div align=center>

![](./static/switch.svg)


<div align=left>

# FNC(金融)

> 基于vue2.0开发的360金服前端组件库，以金融为主题，是一套符合金融领域app开发的前端组件库。部分组件还在完善中，待开发完成1.0版本会发布在npm上，目前不提供npm包下载。

## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 组件分类
### 1、弹出层组件
| 名称 | 功能描述 | 状态 |
| ------ | ------ | ------ |
| popup | 基础弹出层组件，支持不同方向的弹出，支持隐藏mask的弹出形式 | 已完成 |
| action sheet | 附带关闭按钮的自定义头部，自定义底部，自定义内容的起底弹窗| 已完成 |
| dialog | 对话框，支持命令式的条用方式，具体功能看demo | 已完成 |
| picker | 选择器 | 已完成 |
| datePicker | 日期选择器 | 已完成 |
| segPicker | 级联选择器，适用于多级操作 | 已完成 |
| dropDown | 下拉选择菜单，支持全屏下拉和局部下拉| 已完成 |

### 2、视图布局
| 名称 | 功能描述 | 状态 |
| ------ | ------ | ------ |
| cell | 单元格条目 | 已完成 |
| panel | 面板 | 已完成 |
| card | 卡片 | 已完成 |
| actionBar | 操作条 | 完成中 |

### 3、优化体验
| 名称 | 功能描述 | 状态 |
| ------ | ------ | ------ |
| flex | 拖动到底部或顶部时，使用svg模拟的原生拖动阴影效果 | 已完成，未测试 |
| trans | 提供了一套页面过度的效果 | 已完成 |

### 4、tab & slide & scroll
| 名称 | 功能描述 | 状态 |
| ------ | ------ | ------ |
| tabBar | tab 切换条 | 已完成 |
| tabContainer | tab 内容切换容器 | 已完成 |
| tab | tab 切换 | 已完成 |
| slide | 默认幻灯片效果，可自定义内容 | 已完成 |
| scroll | 上拉加载， 下拉刷新 | 已完成 |
| sticky | 吸顶工具 | 已完成 |

### 5、原生类
| 名称 | 功能描述 | 状态 |
| ------ | ------ | ------ |
| input | 封装原生的input, 支持格式化手机，银行卡，电话等，自带关闭按钮，方便设置禁用，只读，disabled等模式 | 已完成 |
| button | 按钮，支持请求模式，disable等模式，具体功能看demo | 已完成 |
| checkbox | 多选框 | 已完成 |
| raido | 单选框 | 已完成 |

### 6、小工具
| 名称 | 功能描述 | 状态 |
| ------ | ------ | ------ |
| dataWindow | 数据窗 | 已完成 |
| calendar | 日历 | 已完成 |
| loading | 加载动画，具体功能看demo, 支持命令式引入 | 已完成 |
| toast | 轻提示，具体功能看demo | 已完成 |
| noticeBar | 全局通知 | 已完成 |
| stepBar | 步骤条 | 未完成 |
| bulletin | 公告栏 | 已完成 |
| tip | 气泡提示 | 已完成 |
| number | 数字，支持精度设置，千分位，取整， 动画过渡，带金额符号￥ | 已完成 |
| keyboard | 键盘 | 已完成 |
| codebox | 密码框 | 已完成 |
| progressBar | 进度条 | 已完成 |
| badge | 徽章 | 已完成 |

