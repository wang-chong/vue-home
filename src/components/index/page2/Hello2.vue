<template>
  <div class="hello2">
    <p>我是hello2</p>
    <child-component @childClick="childComponentClick">
      <p>我是child slot</p>
      <button @click="childSlotClick">点击我</button>
    </child-component>
    <div class="detail">
      <detail-list :content="detail" minHeight="21" :autoHide="false" activeClass="test" />
    </div>
    <p>以下是other组件，来自懒加载！</p>
    <other />
    <p v-once>此数字使用了v-once，所以改变test的值也不会改变渲染test等于{{test}}</p>
    <button @click="changeTest">改变test的值为100</button>
  </div>
</template>

<script>
import childComponent from './ChildComponent'
const other = () => import('./../Other')

export default {
  components: {
    'child-component': childComponent,
    'other': other
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
    changeTest () {
      this.test = 100
    },
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
.hello2{
  width: 100%;
  .detail{
    width: 3rem;
    background-color: rgba(0,0,0,0.1);
  }
}
</style>
