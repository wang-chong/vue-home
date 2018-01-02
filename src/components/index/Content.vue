<template>
  <div class="page-content">
    <keep-alive>
      <transition name="slide">
        <router-view class="slide" v-cloak></router-view>
      </transition>
    </keep-alive>
    <router-view name="no-transition"></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/css/frame.scss';
.page-content{
  padding-bottom: $footerHeight;
  overflow-x: hidden;
  .slide{
    width: 100%;
    will-change: transform;
    float: left;
  }
}
@keyframes slide-in{
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slide-leave{
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
.slide-enter-active{
  animation-name: slide-in;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
}
.slide-leave-active{
  animation-name: slide-leave;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
}
</style>
