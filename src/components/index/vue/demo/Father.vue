<script>
function printMsg (text) {
  console.log('father\'s current period is ' + text)
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
      name: 'father'
    }
  },
  methods: {
    printName () {
      console.log('father\'s name is' + this.name)
    },
    printFatherName () {
      console.log('father\'s name is father')
    }
  }
}
</script>