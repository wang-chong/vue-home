<template>
  <div id="page-view">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="hello"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      links: [
        'hello1',
        'hello2',
        'hello3',
        'footer',
        'other'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
#page-view {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.hello{
  font-size: 50px;
}

</style>
