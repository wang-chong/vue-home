<template>
  <div>
    <h2>针对数组的各种操作</h2>
    <div class="item">
      <h2>1、遍历</h2>
      <pre>
      const arr = ['A', 'B', 'C']
      </pre>
      <h3>for循环</h3>
      <pre>
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
      }
      // 使用方便，最常用的方式，但是写法不够简洁
      </pre>
      <h3>forEach</h3>
      <pre>
      arr.forEach((ele) => {
        console.log(ele)
      })
      // 写法简单，但是没有break操作，如
      arr.forEach((ele) => {
        if (ele === 'C') {
          break
        }
        console.log(ele)
      })
      // 上述代码会报错，不能使用break语句
      </pre>
      <h3>map</h3>
      <pre>
      arr.map(ele => {
        console.log(ele)
      })
      // 同样没有break操作，如
      arr.forEach((ele) => {
        if (ele === 'C') {
          break
        }
        console.log(ele)
      })
      // 上述代码会报错，不能使用break语句
      </pre>
      <h3>for-in循环</h3>
      <pre>
      for (let ele in arr) {
        console.log(arr[ele])
      }
      // 此处返回的ele为字符串的'0','1','2'
      // 所以，实际上for-in一般用来迭代对象而不是数组
      </pre>
      <h3>for-of</h3>
      <pre>
      for (let ele of arr) {
        console.log(ele)
      }
      // 直接取出相应的值，不关心索引位置（多数情况下确实如此）
      </pre>
    </div>
    <div class="item">
      <h2>2、去重</h2>
      <pre>
      const arr = ['A', 'C', 'B', 'D', 'B']
      </pre>
      <h3>for-of循环(也可以用for)</h3>
      <pre>
      let arr1 = []
      for (let item of arr) {
        let exist = false
        for (let val of arr1) {
          if (val === item) {
            exist = true
            break
          }
        }
        if (!exist) {
          arr1.push(item)
        }
      }
      // 明显复杂，利用两层for-of来实现
      </pre>
      <h3>for循环的另一种实现</h3>
      <pre>
      let arr2 = []
      for (let val of arr) {
        if (arr2.indexOf(val) === -1) {
          arr2.push(val)
        }
      }
      // 利用了ES6的数组新方法indexOf,返回某个元素在数组中的索引，查询不到返回-1
      </pre>
      <h3>利用Set类（ES6）</h3>
      <pre>
      const arr3 = new Set()
      for (let val of arr) {
        arr3.add(val)
      }
      // 利用了ES6的新类Set，此类本就是不允许重复的，所以操作简单
      // 后面添加的数据，如果重复了，不能添加进去，根据存储的顺序可以查看
      // 如：上面的set遍历结果为ACBD而不是ACDB
      </pre>
      <h3>利用Set类和扩展运算符</h3>
      <pre>
      const arr4 = [...new Set(arr)]
      // new Set(arr) Set类接受数组进行初始化
      // 扩展运算符...将Set实例展开
      </pre>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// 数组遍历
function arrayIteration () {
  const arr = ['A', 'B', 'C']
  console.log('-----------遍历开始--------')
  console.log('-----------for-------------')
  // for循环迭代
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }

  console.log('-----------forEach-------------')
  // forEach循环
  arr.forEach((ele) => {
    console.log(ele)
  })

  console.log('-----------map-------------')
  // map循环
  arr.map(ele => {
    console.log(ele)
  })

  console.log('-----------for-in-------------')
  // for-in(一般用来迭代对象，尽量不要用来迭代数组)
  for (let ele in arr) {
    console.log(ele) // 字符串的'0','1','2'
    console.log(arr[ele])
  }

  console.log('------------for-of------------')
  // for-of(循环取出值，而不是索引，推荐使用)
  for (let ele of arr) {
    console.log(ele)
  }

  console.log('------------遍历end------------')
}
arrayIteration()

// 数组去重
function arrayUniq () {
  const arr = ['A', 'C', 'B', 'D', 'B']
  console.log('------------去重开始------------')
  console.log('------------两层for循环------------')
  let arr1 = []
  for (let item of arr) {
    let exist = false
    for (let val of arr1) {
      if (val === item) {
        exist = true
        break
      }
    }
    if (!exist) {
      arr1.push(item)
    }
  }
  console.log(arr1)
  console.log('------------一层for循环(for-of)------------')
  let arr2 = []
  for (let val of arr) {
    if (arr2.indexOf(val) === -1) {
      arr2.push(val)
    }
  }
  console.log(arr2)
  console.log('------------一层for循环,利用Set类（ES6）------------')
  const arr3 = new Set()
  for (let val of arr) {
    arr3.add(val)
  }
  console.log(arr3)
  console.log('------------遍历set------------')
  for (let item of arr3) {
    console.log(item)
  }

  console.log('------------利用Set类（ES6）和扩展运算符(...)------------')
  const arr4 = [...new Set(arr)]
  console.log('------------遍历新数组------------')
  for (let item of arr4) {
    console.log(item)
  }

  console.log('------------去重end------------')
}
arrayUniq()

export default {}
</script>

<style lang="scss" scoped>
.item{
  background-color: #f9f8f2;
  margin-bottom: 20px;
  padding: 10px;
  h2{
    text-align: left;
  }
}
</style>
