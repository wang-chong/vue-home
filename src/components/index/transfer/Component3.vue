<template>
  <div>
    <h4>组件1</h4>
    <h3>改变store时注意观察组件2</h3>
    <my-input v-model="num"></my-input>
    <button @click="clickAc">改变store</button>
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
    }
  }
}
</script>
