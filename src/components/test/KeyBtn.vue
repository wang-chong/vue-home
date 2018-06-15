<template>
  <div class="key-btn"
    :class="btnClass"
    @click="action(text)">
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'number'
    },
    text: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    },
    grow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      return [this.type, this.grow ? 'grow' : '']
    }
  }
}
</script>

<style lang="scss" scoped>
.key-btn{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 0;
  padding: 11% 0;
  width: 22%;
  border-radius: 50%;
  margin: 0 1.25% 4%;
  box-sizing: border-box;
  cursor: pointer;
  &.number{
    background-color: #343434;
    color: #fff;
  }
  &.operate{
    background-color: #F29B3A;
    color: #FFF5CD;
  }
  &.flag{
    background-color: #A8A8A8;
    color: #000;
  }
  &.grow{
    flex-grow: 1;
  }
  &.left{
    justify-content: flex-start;
  }
}
</style>
