<template>
  <div class="promise">
    <p>count={{count}}</p>
    <p>计时{{time}}</p>
    <p>计时{{time1}}</p>
    <button @click="addCount(false)">count加1</button>
    <button @click="addCount(true)">count加1(异步)</button>
    <button @click="addCountAfterAll()">count加1(异步,计时都为2才执行)</button>
    <p>
      <a href="https://www.cnblogs.com/lvdabao/p/es6-promise-1.html" target="_blank">参考文档</a>
    </p>
  </div>
</template>

<script>
const END = 2

function creatPromise () {
  // 基础用法
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // 成功，进入then方法
      resolve()
    }, 1000)
  })
}

function creatPromise1 (vm) {
  // 基础用法
  return new Promise((resolve, reject) => {
    const counter = setInterval(function () {
      vm.time++
      if (vm.time === END) {
        clearInterval(counter)
        resolve('1计时结束')
      }
    }, 1000)
  })
}

function creatPromise2 (vm) {
  // 基础用法
  return new Promise((resolve, reject) => {
    const counter = setInterval(function () {
      vm.time1++
      if (vm.time1 === END) {
        clearInterval(counter)
        resolve('2计时结束')
      }
    }, 2000)
  })
}

export default {
  data () {
    return {
      count: 0,
      time: 0,
      time1: 0
    }
  },
  methods: {
    addCount (async) {
      const vm = this
      if (async) {
        creatPromise().then(function () {
          vm.count++
        })
        return
      }
      vm.count++
    },
    addCountAfterAll () {
      const vm = this
      Promise.all([creatPromise1(vm), creatPromise2(vm)])
      .then(function (results) {
        console.log(results)
        vm.count++
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.promise{
  padding: 50px;
  text-align: center;
  p{
    margin: 20px;
    a{
      font-size: 0.2rem;
      color: blue;
    }
  }
}
</style>
