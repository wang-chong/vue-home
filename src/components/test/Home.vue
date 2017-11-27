<template>
  <div>
    <ul>
      <li v-for="(item, idx) in routes"><router-link :to="item.path" :class="'lalla'">{{item.path}}</router-link></li>
    </ul>
    <ul>
      <li v-for="(item, idx) in childRoutes"><router-link :to="item.path">{{item.name}}</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
function renderSubTitle (vm) {
  for (let i = 0; i < vm.routes.length; i++) {
    if (vm.$route.fullPath.startsWith(vm.routes[i].path)) {
      vm.childRoutes = vm.routes[i].children
      break
    }
  }
}

export default {
  data () {
    return {
      routes: this.$router.options.routes,
      childRoutes: []
    }
  },
  mounted () {
    renderSubTitle(this)
  },
  watch: {
    '$route' () {
      renderSubTitle(this)
    }
  }
}
</script>

<style lang="scss">
a.router-active{
  color: red;
}
</style>