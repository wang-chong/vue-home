<template>
  <div>
    <h2>Generator函数的用法</h2>
    <h3>使用实例</h3>
    <pre>
    function promiseFunc (a) {
      return new Promise((resolve, reject) => {
        resolve(a + 9)
      })
    }
    function<span>*</span> asyncFunc (a) {
      const b = yield promiseFunc(a)
      console.log('1234567890123456')
      console.log(b)
      console.log('123456789')
      return a
    }

    const result = asyncFunc(5)
    const first = result.next()
    console.log(first)
    first.value.then((res) => {
      console.log('first.value.then')
      console.log(res) // 14
      console.log('first.value.then end......')
    })
    console.log('111111111111111111111111')
    // 此时传入的20作为上一次异步执行的结果，赋值给变量b
    console.log(result.next(20))
    console.log('222222222222222222222222')
    console.log(promiseFunc()) // promise对象
    </pre>
    <p>以上代码打印的顺序如下</p>
    <pre>
    console.log(first)
    console.log('111111111111111111111111')
    console.log('1234567890123456')
    console.log(b) // 如果不传入20，那么就是undefined
    console.log('123456789')
    console.log(result.next(20)) // {value: 5, done: true}
    console.log('222222222222222222222222')
    console.log(promiseFunc())
    // 被异步执行的东西都到了最后
    console.log('first.value.then')
    console.log(res) // 14
    console.log('first.value.then end......')
    </pre>
  </div>
</template>

<script>
function promiseFunc (a) {
  return new Promise((resolve, reject) => {
    resolve(a + 9)
  })
}
function* asyncFunc (a) {
  const b = yield promiseFunc(a)
  console.log('1234567890123456')
  console.log(b) // 如果不传入20，那么就是undefined
  console.log('123456789')
  return a
}

const result = asyncFunc(5)
const first = result.next()
console.log(first)
first.value.then((res) => {
  console.log('first.value.then')
  console.log(res) // 14
  console.log('first.value.then end......')
})
console.log('111111111111111111111111')
// 此时传入的20作为上一次异步执行的结果，赋值给变量b
console.log(result.next(20)) // {value: 5, done: true}
console.log('222222222222222222222222')
console.log(promiseFunc()) // promise对象
</script>
