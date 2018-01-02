<template>
  <div>
    <h4>组件1</h4>
    <h3>改变store时注意观察组件2</h3>
    <my-input v-model="num"></my-input>
    <button @click="clickAc">通过mutation改变store</button>
    <button @click="clickAc1">通过action改变store</button>
  </div>
</template>

<script>
import { INCREMENT } from '@/store/mutationTypes'

export default {
  data () {
    return {
      num: ''
    }
  },
  methods: {
    clickAc () {
      const vm = this
      if (vm.num) {
        // 触发事件还可以传参，一般使用对象触发方式
        vm.$store.commit({
          type: INCREMENT,
          num: parseInt(vm.num)
        })
      } else {
        vm.$store.commit(INCREMENT)
      }
    },
    clickAc1 () {
      // 触发action更新状态
      const vm = this
      if (vm.num) {
        // 触发事件还可以传参，一般使用对象触发方式
        vm.$store.dispatch({
          type: INCREMENT,
          num: parseInt(vm.num)
        })
      } else {
        vm.$store.dispatch(INCREMENT)
      }
    }
  }
}
</script>
