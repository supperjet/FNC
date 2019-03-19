###1、Matrix 组件装载过程
1.首先，整个matrix作为Vue的一个插件，在main.js中被引入

```js
	Vue.use(Matrix)
```
Matrix插件真实定义在了``libs/matrix/index.js``中，``main.js``中引入的Matrix定义在了``register.js``文件中，此处先会在Matrix插件上注册内置插件``plugin``和自定义插件``custonPlugin``。然后在在install方法中将Matrix插件和一些其他的插件注册在vue上。

```js
Matrix.use(Plugin)	//内置组件
Matrix.use(CustomPlugin)	//自定义组件

export default {
	install(Vue) {
		...
		Vue.use(Matrix) //注册Matrix
		...
	}
}
```
本质上Matrix是一个挂载在vue上的插件，并且Matrix插件本身支持使用install和use的方式向Vue是注册全局组件。

```js
const Matrix = {}
<!--Matrix静态方法-->

//注册组件列表
Matrix.use
Matrix.component 生成组件包
Matrix.prop	生成表单包

//通过生成的组件列表，将组件注册在Vue上
Matrix.install = （Vue）=> {
	Vue.use(prop)
	Vue.use(Component)
}

Matrix.adapter
Matrix.mixins

```
use: Matrix组件注册，实则是调用Matrix.component和Matrix.prop方法生成对应的COM_LIST和LIST。

install: prop来自``matrix-prop.js``, component来自``matrix-component.js``, 内部都包含了install方法，Vue会自动调用内部的install方法将组件注册在vue上（比如： 循环遍历COM_LIST使用Vue.component(comp.name, comp.dispaly)进行注册）。