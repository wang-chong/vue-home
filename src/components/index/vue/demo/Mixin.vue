<template>
  <div class="mixin">
    <h3>mixin</h3>
    <button @click="printName" ref="lal">打印子组件的数据name</button>
    <button @click="printFatherName">打印父组件的数据name</button>
  </div>
</template>

<script>
import father from './Father'
import father1 from './Father1'
function printMsg (text) {
  console.log('mixin\'s current period is ' + text)
}
export default {
  mixins: [father, father1],
  extends: father1,
  beforeCreate () {
    printMsg('beforeCreate')
  },
  created () {
    printMsg('created')
  },
  beforeMount () {
    printMsg('beforeMount')
  },
  mounted () {
    printMsg('mounted')
  },
  beforeUpdate () {
    printMsg('beforeUpdate')
  },
  updated () {
    printMsg('updated')
  },
  activated () {
    printMsg('activated')
  },
  deactivated () {
    printMsg('deactivated')
  },
  beforeDestroy () {
    printMsg('beforeDestroy')
  },
  destroyed () {
    printMsg('destroyed')
  },
  errorCuptured () {
    printMsg('errorCuptured')
  },
  data () {
    return {
      name: 'mixin'
    }
  },
  methods: {
    printName () {
      console.log('child\'s name is ' + this.name)
    }
  }
}
</script>