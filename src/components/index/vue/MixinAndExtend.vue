<template>
  <div>
    <v-extend></v-extend>
    <v-mixin></v-mixin>
    <br>
    <br>
    <br>
    <h3>总结</h3>
    <ol class="list">
      <li>mixin和extend均可以实现继承，其中生命周期函数的执行均是先执行被继承的组件，如本例子中，所有的生命周期函数均是father或者father1的先执行，然后再是extend或mixin。</li>
      <li>对于data或者methods，如果同名，那么以继承组件的为准，可以理解为不再继承同名方法或数据。</li>
      <li>extends可以理解为单继承，mixins可以理解为多继承，如本例中mixin组件继承了father和father1
    mixins: [father, father1]</li>
      <li>同时使用extends和mixins时，先运行extends的周期函数，所以如果methods有同名函数，那么以mixins的为准，可以理解为<span>后来居上</span></li>
    </ol>
  </div>
</template>

<script>
import extend from './demo/Extend'
import mixin from './demo/Mixin'
export default {
  components: {
    'v-extend': extend,
    'v-mixin': mixin
  }
}
</script>