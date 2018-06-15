<template>
  <div class="calc-container">
    <div class="expression" :class="{'inputing': inputing}">{{expression}}</div>
    <div class="result-area">{{calcResult}}</div>
    <div class="operate-area">
      <key-btn
        v-for="btn in btns"
        :type="btn.type"
        :text="btn.text"
        :grow="btn.grow"
        :action="action">
      </key-btn>
    </div>
  </div>
</template>

<script>
import keyBtn from './KeyBtn'

const btns = [{
  type: 'flag',
  text: 'AC'
}, {
  type: 'flag',
  text: '+/-'
}, {
  type: 'flag',
  text: '%'
}, {
  type: 'operate',
  text: '/'
}, {
  text: '7'
}, {
  text: '8'
}, {
  text: '9'
}, {
  type: 'operate',
  text: 'X'
}, {
  text: '4'
}, {
  text: '5'
}, {
  text: '6'
}, {
  type: 'operate',
  text: '-'
}, {
  text: '1'
}, {
  text: '2'
}, {
  text: '3'
}, {
  type: 'operate',
  text: '+'
}, {
  grow: true,
  text: '0'
}, {
  text: '.'
}, {
  type: 'operate',
  text: '='
}]

export default {
  components: {
    'key-btn': keyBtn
  },
  data () {
    return {
      btns: btns,
      result: [],
      inputing: true
    }
  },
  computed: {
    expression () {
      return this.result.join('')
    },
    calcResult () {
      return this.result.join('')
    }
  },
  methods: {
    action (value) {
      this.result.push(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.calc-container{
  width: 300px;
  padding: 100px 20px 20px;
  background-color: #000;
  .result-area{
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    height: 100px;
    text-align: right;
  }
  .operate-area{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .expression{
    font-size: 14px;
    font-weight: 300;
    &.inputing{
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
