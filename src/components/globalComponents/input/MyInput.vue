<template>
  <div>
    <p>我是全局组件！！！！！！！！</p>
    <input type="text" v-model="currentValue">
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    doAlert () {
      alert('lalala')
    },
    changeValue () {
      this.value = 888
    }
  },
  mounted () {
    console.log('value:' + this.value)
  },
  watch: {
    currentValue (val, oldVal) {
      this.$emit('input', val)
    }
  }
}
</script>
