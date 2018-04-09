<template>
  <div class="page-content">
    <keep-alive>
      <transition name="slide">
        <router-view name="transition" class="slide" v-cloak></router-view>
      </transition>
    </keep-alive>
    <router-view class="page"></router-view>
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

<style lang="scss">
.page{
  width: 6.6rem;
  margin: 0 auto;
  padding: 0.3rem;
  position: relative;
  background-color: #EFEBDA;
  border-radius: 8px;
  margin-top: 0.3rem;
  pre{
    white-space: pre-wrap;
  }
  pre, ol.list{
    margin: 20px 0;
    border-radius: 8px;
    padding: 10px 0;
    background-color: #b1d7e8;
    font-size: 14px;
    span{
      color: red;
      font-weight: 600;
    }
  }
  ol.list{
    list-style: decimal;
    padding-left: 20px;
    padding-right: 10px;
    li{
      margin: 5px;
    }
  }
  .from{
    margin: 15px 0;
  }
}
</style>
