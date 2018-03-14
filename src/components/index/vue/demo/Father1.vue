<script>
function printMsg (text) {
  console.log('father1\'s current period is ' + text)
}
export default {
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
      name: 'father1'
    }
  },
  methods: {
    printName () {
      console.log('father1\'s name is' + this.name)
    },
    printFatherName () {
      console.log('father1\'s name is father1')
    }
  }
}
</script>