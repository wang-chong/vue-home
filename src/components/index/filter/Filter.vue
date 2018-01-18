<template>
  <div style="padding: 40px;" v-once>
    <h3>下面的数据经过了过滤器进行格式化</h3>
    <p>日期格式化{{ new Date().getTime() | date }}</p>
    <p>日期格式化{{ new Date().getTime() | date('yyyy:MM:dd hh:mm:ss') }}</p>
    <p>三位一逗{{ 520122102938399 | num }}</p>
    <p>空字符显示--，如{{ '' | empty }}</p>
    <p>金额格式化，如{{ 1920199.8293 | amount }}(默认保留两位小数)</p>
    <p>金额格式化，如{{ 1920199.8293 | amount(1) }}(保留一位小数)</p>
  </div>
</template>

<script>
import bus from '@/assets/js/bus.js'
import { SHOW_LOADING, HIDE_LOADING } from '@/assets/js/BusActions'

export default {
  beforeRouteEnter (to, from, next) {
    bus.$emit(SHOW_LOADING)
    setTimeout(() => {
      bus.$emit(HIDE_LOADING)
    }, 1000)
    next()
  }
}
</script>
