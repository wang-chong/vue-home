<template>
  <div class="child-container">
    <p>我是整个child部分</p>
    <slot></slot>
    <button @click="childClick">子组件</button>
    <!-- <input type="text" v-focus> -->
    <!-- 上面的input可以自动获取焦点，但是会影响到过渡动画 -->
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

<style lang="scss" scoped>
.child-container{
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
}
</style>
