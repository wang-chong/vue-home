<template>
  <div>
    简单路由
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      inputValue: '999',
      msg: 'Hello world',
      links: [
        'hello2',
        'hello3'
      ],
      test: 999
    }
  },
  methods: {
    change () {
      this.test = 888888
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
