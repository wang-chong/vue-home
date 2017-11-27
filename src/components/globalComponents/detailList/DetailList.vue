<!-- 
* 
* @props
* content(array): 所有描述
* minHeight(number): 内容最低高度
* autoHide(boolean): 非点击内容是否自动收起
* activeClass(string): 展开时按钮和内容添加自动添加的class名称
* 
-->

<template>
  <div id="detail-list">
    <div class="detail-list" v-for="(item, idx) in content">
      <div class="detail-content" :class="[detailHeights[idx] !== defaultHeight ? active : '']" ref="detailContent" :style="{'height': detailHeights[idx] + 'px'}">
        {{item}}
      </div>
      <span @click="detailClick(idx)" :class="[detailHeights[idx] !== defaultHeight ? active : '']">详情</span>
    </div>
  </div>
</template>

<script>
const defaultHeight = 20
function getDefaultHeights (vm) {
  let arr = []
  for (let i = 0; i < vm.content.length; i++) {
    arr.push(vm.defaultHeight)
  }
  return arr
}

export default {
  props: [
    'minHeight',
    'content',
    'autoHide',
    'activeClass'
  ],
  data () {
    return {
      defaultHeight: this.minHeight || defaultHeight,
      height: this.defaultHeight,
      active: this.activeClass || 'show-detail',
      detailHeights: []
    }
  },
  created () {
    const vm = this
    vm.detailHeights = getDefaultHeights(vm)
  },
  methods: {
    detailClick (idx) {
      const vm = this
      if (vm.autoHide) {
        let arr = getDefaultHeights(vm)
        arr[idx] = vm.$refs.detailContent[idx].scrollHeight
        vm.detailHeights = arr
      } else {
        if (vm.detailHeights[idx] !== vm.defaultHeight) {
          vm.$set(vm.detailHeights, idx, vm.defaultHeight)
        } else {
          vm.$set(vm.detailHeights, idx, vm.$refs.detailContent[idx].scrollHeight)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#detail-list{
  background-color: rgba(0, 0, 0, 0.1);
}
.detail-list{
  padding: 10px;
  text-align: right;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: #fff;
  .detail-content{
    text-align: left;
    overflow: hidden;
    margin-bottom: 14px;
    will-change: height;
    transition: all .3s ease-out;
    &.show-detail{
      background-color: rgb(249, 204, 157);
    }
  }
  span{
    padding: 3px 6px;
    border-radius: 5px;
    background-color: rgba(22,22,22,0.2);
    cursor: pointer;
    &.show-detail{
      background-color: rgb(249, 204, 157);
    }
  }
}
</style>