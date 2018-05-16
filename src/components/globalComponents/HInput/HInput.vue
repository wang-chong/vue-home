<template>
  <div class="my-input">
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
  watch: {
    currentValue (val, oldVal) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-input{
  display: inline-block;
}
input{
  padding: 3px 6px;
  border-radius: 3px;
  height: 20px;
  border: 1px solid #e6e6e6;
  display: inline-block;
  &:focus{
    border-color: #409eff;
  }
}
</style>
