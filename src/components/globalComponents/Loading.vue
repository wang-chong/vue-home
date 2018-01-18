<template>
  <div id="loadingMask" v-if="showLoading">
    <div class="loading-text">
      {{ loadingText || '数据载入中...' }}
    </div>
  </div>
</template>

<script>
import bus, { SHOW_LOADING, HIDE_LOADING } from '@/assets/js/bus.js'

export default {
  data () {
    return {
      showLoading: false,
      loadingText: ''
    }
  },
  mounted () {
    const vm = this
    bus.$on(SHOW_LOADING, function (loadingText) {
      vm.showLoading = true
      vm.loadingText = loadingText
    })
    bus.$on(HIDE_LOADING, function () {
      vm.showLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
#loadingMask{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8888;
  background-color: rgba(0, 0, 0, 0.4);
  .loading-text{
    // 脱离文档流，利用css3位移
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 60%;
    transform: translate(-50%, -50%);
    border: 1px solid #666;
    border-radius: 0.08rem;
    padding: 0.2rem 0.4rem;
    color: #333;
    text-align: center;
    font-size: 0.2rem;
    background-color: #fff;
    // background: linear-gradient(to right, #f3d7d7, #538816);
    // transition: all 2s linear;
    // background-position: -50px 0;
  }
}
</style>