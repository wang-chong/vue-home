<template>
  <div></div>
</template>

<script>
import ajax from '@/assets/js/Ajax'

console.log(ajax)
export default{
  mounted () {
    // this.test()
    this.createUserId()
  },
  methods: {
    test () {
    //   const option = {
    //     method: 'GET',
    //     url: '/api/redirect?url=http%3a%2f%2flocalhost%3a8088'
    //   }
    //   const onSuccess = (res) => {
    //     console.log(res)
    //   }
    //   const onError = () => {
    //     console.log('error')
    //   }
    //   ajax(option, onSuccess, onError)
    },
    createUserId () {
      var stampId = `U${Date.now()}`
      var userId = `${stampId.substring(0, 5)}${stampId.substring(10)}`
      console.log(stampId.substr(5))
      console.log(stampId.substring(10))
      console.log(stampId)
      console.log(userId)
    }
  }
}
</script>