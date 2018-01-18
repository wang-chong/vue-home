<template>
  <div id="pageView">
    <loading></loading>
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import Loading from '@/components/globalComponents/Loading'

export default {
  components: {
    loading: Loading
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/theme.scss'
</style>

<style lang="scss" scoped>
#pageView{
  position: relative;
  min-height: 100%;
  overflow-x: hidden;
  font-size: 0.12rem;
}
</style>
