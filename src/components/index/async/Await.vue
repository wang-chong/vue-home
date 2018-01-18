<template>
  <div>
    <h2>利用async和await来实现异步操作同步化</h2>
    <h3>代码如下</h3>
    <pre>
    const awaitFunc = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('awaitFunc end...')
        }, 1000)
      })
    }
    async function test () {
      console.log(new Date().getSeconds())
      const lala = await awaitFunc()
      console.log(new Date().getSeconds())
      console.log(lala)
    }

    const test1 = () => {
      console.log('test1')
    }

    test()
    test1()
    /*
    * 打印结果如下
    * 56
    * test1
    * 57
    * awaitFunc end...
    */
    </pre>
    <p>以上结果说明async标记之后的函数，在遇到await时必须等待await的返回，才能继续执行后面的程序，但是并不会阻塞async函数之外的程序的执行，如上面的test1函数</p>
    <pre>
    const test1 = () => {
      console.log('test1')
    }
    const awaitFunc1 = () => {
      return 'awaitFunc1 end...'
    }
    async function test2 () {
      console.log(new Date().getSeconds())
      const lala = await awaitFunc1()
      console.log(new Date().getSeconds())
      console.log(lala)
    }

    test2()
    test1()
    /*
    * 打印结果如下
    * 9
    * test1
    * 10
    * awaitFunc1 end...
    */
    </pre>
    <p>以上结果说明async标记之后的函数，即时await等待的函数并没有异步执行，在程序运行过程中也存在一定的延时，也就相当于进行了异步操作，程序会继续执行async标记的函数的后面的程序，如test1,并且快于await之后的程序</p>
    <div class="from">
      <h3>参考文档如下</h3>
      <p><a href="http://www.ruanyifeng.com/blog/2015/05/async.html" target="_new">参考文档1</a></p>
      <p><a href="https://segmentfault.com/a/1190000007535316" target="_new">参考文档2</a></p>
    </div>
  </div>
</template>

<script>
// const awaitFunc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('awaitFunc end...')
//     }, 1000)
//   })
// }
// async function test () {
//   console.log(new Date().getSeconds())
//   const lala = await awaitFunc()
//   console.log(new Date().getSeconds())
//   console.log(lala)
// }
const test1 = () => {
  console.log('test1')
}

// test()
// test1()

const awaitFunc1 = () => {
  return 'awaitFunc1 end...'
}
async function test2 () {
  console.log(new Date().getSeconds())
  const lala = await awaitFunc1()
  console.log(new Date().getSeconds())
  console.log(lala)
}

test2()
test1()

export default {
  data () {
    return {}
  },
  mounted () {
    // test()
  }
}
</script>