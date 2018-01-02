<template>
  <div>
    <input name="cellphone" :disabled="(state > 0)" /><br>
    <input name="password" v-show="state > 0" /><br>
    <input name="captcha" v-show="state === 2" />
    <p v-show="state > 0" @click="lastStep">返回</p>
    <p @click="nextStep">下一步</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: 0
    }
  },
  methods: {
    nextStep () {
      this.state = this.state === 2 ? 2 : (this.state + 1)
    },
    lastStep () {
      this.state = this.state === 0 ? 0 : (this.state - 1)
    }
  }
}
</script>