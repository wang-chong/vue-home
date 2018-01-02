<template>
  <div class="center-container">
    <div class="box">
      <img class="center-1" :src="imgSrc" @click="changeImg">
    </div>
    <div class="box">
      <div class="center-2"
        @click="changeImg"
        :style="{ backgroundImage: `url(${imgSrc})` }">
      </div>
    </div>
    <div class="box">
      <img class="center-3" :src="imgSrc" @click="changeImg">
    </div>
    <div class="box">
      <img class="center-4" :src="imgSrc" @click="changeImg">
    </div>
    <div class="box">
      <img class="center-5" :src="imgSrc" @click="changeImg">
    </div>
  </div>
</template>

<script>
const IMGS = [
  'test.png',
  'test1.png'
]

function randomImg () {
  return parseInt(2 * Math.random())
}

export default {
  data () {
    return {
      imgCount: 0
    }
  },
  computed: {
    imgSrc () {
      return '/static/imgs/' + IMGS[this.imgCount]
    }
  },
  methods: {
    changeImg () {
      this.imgCount = randomImg()
    }
  }
}
</script>

<style lang="scss" scoped>
.center-container{
  width: 80%;
  margin: 20px auto;
  &:after{
    content: '';
    display: table;
    clear: both;
  }
  .box{
    position: relative;
    width: 24%;
    height: 2rem;
    line-height: 2rem;
    margin: 0 0.5%;
    text-align: center;
    border: 1px solid #ccc;
    float: left;
    box-sizing: border-box;
    .center-1{
      // 特殊方法
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
    .center-2{
      // 背景图方法
      height: 100%;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .center-3{
      // 脱离文档流，利用css3位移
      position: relative;
      margin: auto;
      max-width: 100%;
      max-height: 100%;
      top: 50%;
      transform: translateY(-50%);
      display: block;
    }
    .center-4{
      // 和center-3类似
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
    .center-5{
      // 需要配合父组件的属性
      // height: 2rem;
      // line-height: 2rem;
      // text-align: center;
      max-width: 100%;
      max-height: 100%;
      display: inline-block;
      vertical-align: middle;
      margin: 0 auto;
    }
    .center-6{
      // flex布局，暂定
    }
  }
}
</style>