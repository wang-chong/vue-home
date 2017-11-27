<template>
  <div class="header-container">
    <ul class="menu">
      <router-link :to="{path: link.value}" tag="li" v-for="link in links" :key="link.value" exct><a>{{link.name}}</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          name: '首页',
          value: '/'
        }, {
          name: 'page1',
          value: 'hello2'
        }, {
          name: 'page2',
          value: 'hello3'
        }, {
          name: 'page3',
          value: 'hello'
        }, {
          name: 'page4',
          value: 'imgtest'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container{
  height: 60px;
}
ul.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(229,229,229);
  li{
    display: block;
    float: left;
    height: 60px;
    padding: 0 12px;
    line-height: 60px;
  }
}
.router-exact-active{
  a{
    color: green;
  }
}
</style>