<template>
  <div>
    <p>我是全局组件input！！！！！！！！</p>
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

<style lang="scss" scoped>
input{
  padding: 3px 6px;
  border-radius: 3px;
  height: 20px;
  margin-bottom: 10px;
  border: 1px solid #e6e6e6;
  &:focus{
    border-color: #409eff;
  }
}
</style>
