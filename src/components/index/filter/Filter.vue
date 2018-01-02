<template>
  <div style="padding: 40px;">
    <h3>下面的数据经过了过滤器进行格式化</h3>
    <p>日期格式化{{ new Date().getTime() | date }}</p>
    <p>日期格式化{{ new Date().getTime() | date('YYYY:MM:DD hh:mm:ss') }}</p>
    <p>三位一逗{{ 520122102938399 | num }}</p>
    <p>空字符显示--，如{{ '' | empty }}</p>
    <p>金额格式化，如{{ 1920199.8293 | amount }}</p>
    <p>金额格式化，如{{ 1920199.8293 | amount(1) }}</p>
  </div>
</template>