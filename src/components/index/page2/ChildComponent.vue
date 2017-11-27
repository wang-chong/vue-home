<template>
  <div class="child-container">
    <p>我是整个child部分</p>
    <slot></slot>
    <button @click="childClick">子组件</button>
    <input type="text" v-focus>
  </div>
</template>
<script>
export default {
  methods: {
    childClick () {
      this.$emit('childClick')
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  mounted () {
    console.log('child')
    console.log(this)
  }
}
</script>

<style lang="scss">
.child-container{
  color: #fff;
  background-color: rgba(0,0,0,0.4);
}
</style>