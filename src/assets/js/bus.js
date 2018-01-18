/*
*
* vue的空实例
* 主要用于解决非父子组件间的参数传递或者通知事件问题
* 使用方法是在需要触发通知的组件引入此js，然后通过bus.$emit('event',[args...])来触发事件
* 在需要响应的另一个组件引入此js，然后通过bus.$on('event', function([args...]){})来监听事件
*
*/
import Vue from 'vue'
const bus = new Vue()
export default bus
