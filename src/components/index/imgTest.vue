<template>
  <div class="img-container" id="img-container">
    <img :src="imgSrc" @click="changeImg">
    <div id="cut-area" 
      class="cut-area"
      @mousedown="dragstart"
      @mousemove="dragover"
      @mouseup="dragend"
      @mouseout="dragend"
      :style="{top: currentPosition.y + 'px', left: currentPosition.x + 'px'}"></div>
  </div>
</template>

<script>
const IMGS = [
  'test.png',
  'test1.png'
]
function getPosition (event) {
  return {
    x: event.x || event.offsetX || event.pageX || event.clientX,
    y: event.y || event.offsetY || event.pageY || event.clientY
  }
}
export default {
  data () {
    return {
      count: 0,
      containerInfo: {
        width: 0,
        height: 0
      },
      cutAreaInfo: {
        width: 0,
        height: 0
      },
      mousedown: false,
      currentPosition: {
        x: 0,
        y: 0
      },
      originalPosition: {
        x: 0,
        y: 0
      },
      startPosition: {
        x: 0,
        y: 0
      },
      movePosition: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    imgSrc () {
      return '/static/imgs/' + IMGS[this.count]
    }
  },
  mounted () {
    const vm = this
    const cutArea = document.getElementById('cut-area')
    vm.containerInfo = {
      width: vm.$el.offsetWidth,
      height: vm.$el.offsetHeight
    }
    vm.cutAreaInfo = {
      width: cutArea.offsetWidth,
      height: cutArea.offsetHeight
    }
  },
  methods: {
    changeImg () {
      this.count = (this.count === IMGS.length - 1) ? 0 : ++this.count
    },
    dragstart (event) {
      // 这里需要设置开始坐标、over坐标和原始坐标一样，保证每次开始拖动时不会错乱
      const vm = this
      vm.mousedown = true
      const position = getPosition(event)
      vm.startPosition = {
        x: position.x,
        y: position.y
      }
      vm.movePosition = {
        x: position.x,
        y: position.y
      }
    },
    dragover (event) {
      const vm = this
      if (!vm.mousedown) {
        return
      }
      const position = getPosition(event)
      vm.movePosition = {
        x: position.x,
        y: position.y
      }
    },
    dragend () {
      if (!this.mousedown) {
        return
      }
      this.mousedown = false
      this.originalPosition = {
        x: this.currentPosition.x,
        y: this.currentPosition.y
      }
    },
    limitPosition () {
      const vm = this
      const x = vm.originalPosition.x + vm.movePosition.x - vm.startPosition.x
      const y = vm.originalPosition.y + vm.movePosition.y - vm.startPosition.y
      this.currentPosition = {
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y
      }
    }
  },
  watch: {
    movePosition () {
      this.limitPosition()
    }
  }
}
</script>

<style lang="scss" scoped>
.img-container{
  position: relative;
  width: 400px;
  height: 300px;
  overflow: hidden;
  background-color: rgba(0,0,0,0.3);
  margin: auto;
  user-select: none;
  img{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-height: 100%;
    max-width: 100%;
  }
  .cut-area{
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 75px;
    background-color: red;
    cursor: move;
  }
}
</style>
