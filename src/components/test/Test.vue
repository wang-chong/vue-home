<template>
  <div>
    <ul>
      <li v-for="item in links">
        <router-link :to="item">{{item}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6']
    }
  }
}
</script>

