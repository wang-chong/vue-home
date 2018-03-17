<template>
  <div>
    <v-extend></v-extend>
    <v-mixin></v-mixin>
    <v-children1 ref="children1"></v-children1>
    <v-children2 ref="children2"></v-children2>
    <button @click="compareMaster">对比1和2继承的数据地址</button>
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
      <li>当两个组件都继承同一个组件时，所有的数据均<span>不是</span>共享的，因为vue里data采用了函数返回的方式，每一个实例都会重新创建，因此地址是不一样的</li>
    </ol>
  </div>
</template>

<script>
import extend from './demo/Extend'
import mixin from './demo/Mixin'
import children1 from './demo/Children1'
import children2 from './demo/Children2'
export default {
  components: {
    'v-extend': extend,
    'v-mixin': mixin,
    'v-children1': children1,
    'v-children2': children2
  },
  mounted () {
    console.log(this.$el)
  },
  beforeMount () {
    console.log('999999')
    console.log(this.$el)
  },
  methods: {
    // 对比children1和children2的数据master的内存地址是否一致
    compareMaster () {
      const origin1 = this.$refs.children1.getOrigin()
      const origin2 = this.$refs.children2.getOrigin()
      alert('children1和children2继承的数据地址一致：' + (origin1 === origin2))
    }
  }
}
</script>