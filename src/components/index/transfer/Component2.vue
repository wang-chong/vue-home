<template>
  <div>
    <h4>组件2</h4>
    <div>我是来自组件1的数据{{msg}}</div>
  </div>
</template>

<script>
import bus from '@/assets/js/bus.js'

export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    const vm = this
    bus.$on('find2', function (msg) {
      vm.msg = msg
    })
  }
}
</script>
