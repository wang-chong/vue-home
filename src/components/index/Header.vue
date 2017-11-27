<template>
  <ul class="menu">
    <router-link :to="{path: link}" tag="li" v-for="link in links" :key="link"><a>{{link}}</a></router-link>
  </ul>
</template>

<style lang="scss">
ul.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(229,229,229);
  list-style: none;
  margin: 0;
  padding: 0;
  li{
    display: block;
    float: left;
    height: 60px;
    padding: 0 12px;
    line-height: 60px;
  }
}
.router-active{
  color: green;
  a{
    color: green;
  }
}
</style>