<template>
  <div class="promise">
    <p>count={{count}}</p>
    <p>计时{{time}}</p>
    <p>计时{{time1}}</p>
    <div class="margin">
      <button @click="resetData">重置数据</button>
    </div>
    <button @click="addCount(false)">count加1</button>
    <button @click="addCount(true)">count加1(异步)</button>
    <button @click="addCountAfterAll()">count加1(异步,计时都为2才执行)all</button>
    <button @click="chainUse">链式使用promise</button>
    <p v-if="step > 0">time增加结束，2秒后增加time1</p>
    <p v-if="step > 1">time1增加结束</p>
    <div class="margin">
      <button @click="failSolution">promise失败方法reject</button>
      <button @click="addCountAfterAny">promise成功一个即可race</button>
    </div>
    <p>
      <a href="https://www.cnblogs.com/lvdabao/p/es6-promise-1.html" target="_blank">参考文档</a>
    </p>
  </div>
</template>

<script>
const END = 2

function creatPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // 成功，进入then方法
      console.log('promise结束')
      resolve()
    }, 1000)
  })
}

// 基础用法 1秒后成功
function creatPromise1 (vm) {
  return new Promise((resolve, reject) => {
    const counter = setInterval(function () {
      vm.time++
      if (vm.time === END) {
        clearInterval(counter)
        console.log('promise1结束')
        resolve({
          msg: '1计时结束',
          results: []
        })
      }
    }, 1000)
  })
}

// 基础用法 2秒后成功
function creatPromise2 (vm) {
  return new Promise((resolve, reject) => {
    const counter = setInterval(function () {
      vm.time1++
      if (vm.time1 === END) {
        clearInterval(counter)
        console.log('promise2结束')
        resolve('2计时结束')
      }
    }, 2000)
  })
}

// 报错用法reject 1秒后失败
function creatPromise3 () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('promise3失败')
      reject('失败啦！！！！')
    }, 1000)
  })
}

export default {
  data () {
    return {
      count: 0,
      time: 0,
      time1: 0,
      step: 0
    }
  },
  methods: {
    resetData () {
      Object.assign(this.$data, this.$options.data())
    },
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
    },
    chainUse () {
      const vm = this
      creatPromise1(vm)
      .then(function (res) {
        console.log(res)
        vm.step++
        return creatPromise2(vm)
      })
      .then(function (res) {
        console.log(res)
        vm.step++
        return 'well done'
      })
      .then(function (msg) {
        console.log(msg)
      })
    },
    failSolution () {
      // 未执行catch，说明如果then中有错误回调，那么reject将不会进入catch
      creatPromise3()
      .then(function (res) {
        console.log('promise3成功')
        console.log(res)
      }, function (res) {
        console.log(res)
        console.log('promise3失败BY~then')
      })
      .catch(function (res) {
        console.log('promise3失败BY~catch')
      })

      // 进入catch
      creatPromise3()
      .then(function (res) {
        console.log('promise3成功')
        console.log(res)
      })
      .catch(function (res) {
        console.log(res)
        console.log('promise3失败BY~catch')
        console.log('then里面的失败回调优先级高于catch,同时存在时只运行then里面的失败回调')
      })
    },
    addCountAfterAny () {
      const vm = this
      Promise.race([creatPromise1(vm), creatPromise2(vm)])
      .then(function (res) {
        console.log(res)
        console.log('此时promise2还在进行，但是返回的参数已经无法接收')
        vm.count++
      })
      .catch(function (res) {
        console.log('catch')
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
  .margin{
    margin: 20px;
  }
}
</style>
