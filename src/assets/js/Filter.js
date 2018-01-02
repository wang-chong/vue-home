/*
 * 格式化过滤器
 */
import Vue from 'vue'
/* 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子:
 * (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
 /* eslint-disable no-extend-native */
Date.prototype.format = function (fmt) { // author: meizz
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  fmt = fmt || 'yyyy-MM-dd'
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/*
* 日期格式化
* time: 时间戳
* dateType: 规则
*/
Vue.filter('date', function (time, dateType) {
  time = parseInt(time)
  if (time) {
    return new Date(time).format(dateType)
  } else {
    return '- -'
  }
})

/*
* 判断是否为空
* val: 字符串
*/
Vue.filter('empty', function (val) {
  if (val === null || val === undefined || val === '') {
    return '- -'
  } else {
    return val
  }
})

/*
* 三位一逗
* val: 数字字符串或者数字
*/
Vue.filter('num', function (val) {
  if (val === null || val === undefined || val === '') {
    return '0'
  } else {
    return (val + '').replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }
})

/*
* 金额格式化
* s: 需要格式化的字符串或者数字金额
* n: 保留小数的位数
*/
Vue.filter('amount', function (s, n) {
  s = s || 0
  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d.-]/g, '')).toFixed(n) + ''
  const l = s.split('.')[0].split('').reverse()
  const r = s.split('.')[1]
  let t = ''
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }
  return t.split('').reverse().join('') + '.' + r
})
