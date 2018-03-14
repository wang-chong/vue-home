<template>
  <div class="extend">
    <h3>extend</h3>
    <button @click="printName">打印组件name</button>
  </div>
</template>

<script>
import father from './Father'
function printMsg (text) {
  console.log('extend\'s current period is ' + text)
}
export default {
  extends: father,
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
      name: 'extend'
    }
  },
  methods: {
    printName () {
      console.log('child\'s name is ' + this.name)
    }
  }
}
</script>