<template>
  <div>
    <p>我是hello2</p>
    <child-component @childClick="childComponentClick">
      <p>我是child slot</p>
      <button @click="childSlotClick">点击我</button>
    </child-component>
    <div class="detail">
      <detail-list :content="detail" minHeight="21" :autoHide="false" activeClass="test" />
    </div>
  </div>
</template>

<script>
import childComponent from './ChildComponent'
export default {
  components: {
    'child-component': childComponent
  },
  data () {
    return {
      test: 99,
      detail: [
        '开机了',
        '开机了大家来看建档立卡就打开礼金卡的距离卡就离开进来的考虑空间发挥萨福克花括号',
        '开机了大家来看建档立卡就打开礼金卡的距离卡就离开进来的考虑空间发挥萨福克花括号',
        '开机了大家来看建档立卡就打开礼金卡的距离卡就离开进来的考虑空间发挥萨福克花括号'
      ]
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
    childSlotClick () {
      alert('我在父组件')
    },
    childComponentClick () {
      alert('我在父组件，但是需要在子组件触发')
    }
  }
}
</script>

<style lang="scss" scoped>
.detail{
  width: 300px;
  background-color: rgba(0,0,0,0.1);
}
</style>
