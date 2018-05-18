<template>
  <div>
    <ul>
      <li v-for="(item, idx) in routes"><router-link :to="item.path + '/hello' + (idx + 1)">{{item.path}}</router-link></li>
    </ul>
    <ul>
      <li v-for="(item, idx) in childRoutes"><router-link :to="item.path + '/hello' + (idx + 1)">{{item.name}}</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routes: this.$router.options.routes,
      childRoutes: []
    }
  },
  mounted () {
    // console.log(this.$router.options.routes)
  },
  watch: {
    '$route' () {
      for (let i = 0; i < this.routes.length; i++) {
        if (this.$route.fullPath.startsWith(this.routes[i].path)) {
          this.childRoutes = this.routes[i].children
        }
      }
    }
  }
}
</script>