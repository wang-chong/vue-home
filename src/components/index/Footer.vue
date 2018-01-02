<template>
  <div class="footer-container">
    <p>我是footer</p>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/css/frame.scss';
.footer-container{
  position: absolute;
  width: 100%;
  height: $footerHeight;
  line-height: $footerHeight;
  bottom: 0;
  text-align: center;
  background-image: -webkit-radial-gradient(center, #f3d7d7, #538816);
}
</style>