<template>
  <div>
    <h4>组件1</h4>
    <input v-model="value"></input>
    <button @click="clickAc">点击我传递到组件2</button>
  </div>
</template>

<script>
import bus from '@/assets/js/bus'
import { Test } from '@/assets/js/BusActions'

export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    clickAc () {
      bus.$emit(Test, this.value)
    }
  }
}
</script>
