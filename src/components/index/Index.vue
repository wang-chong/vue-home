<template>
  <div id="pageView">
    <router-view name="header"></router-view>
    <div class="page-content">
      <router-view></router-view>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
@import '~@/assets/css/theme.scss'
</style>

<style lang="scss">
#pageView{
  position: relative;
  min-height: 100%;
  .page-content{
    padding-bottom: 60px;
  }
}
</style>
