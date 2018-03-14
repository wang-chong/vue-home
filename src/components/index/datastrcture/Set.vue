<template>
  <div>
    <h3>1、增删查等操作</h3>
    <pre>
      function setDemo () {
        const sd = new Set()
        const sd1 = new Set()
        // 增加
        for (var i = 0; i < 10; i++) {
          sd.add(i)
        }
        for (var j = 5; j < 15; j++) {
          sd1.add(j)
        }
        var arr = [...sd]
        console.log(arr.filter(val => val % 2 === 0))
        console.log(arr)

        // 并集
        var result = [...new Set([...sd, ...sd1])]
        console.log(result)

        // 交集
        var result1 = [...sd1].filter(val => sd.has(val))
        console.log(result1)

        // 差集
        var result2 = [...sd].filter(val => !sd1.has(val))
        console.log(result2)

        // 方法如下：
        // <span>删除</span><br>
        console.log(sd.delete(1)) // 返回布尔值，表示是否删除成功

        // <span>增加</span><br>
        console.log(sd.add('lalal')) // 返回Set结构本身

        // 判断是否有某个值
        // <span>查询</span><br>
        console.log(sd.has('lalal')) // true

        // 清除所有成员
        sd.clear()

        // 属性如下：
        // 实例中数据总数
        console.log(sd.size) // 0
      }
    </pre>
    <h3>2、遍历方法</h3>
    <pre>
      .keys()
      .values()
      .entries()
      .forEach((val, key) => {})
      // 由于Set结构的特殊性，key和value是一样的
    </pre>
    <h3>3、扩展运算符也可用于set结构</h3>
  </div>
</template>

<script>
function setDemo () {
  const sd = new Set()
  const sd1 = new Set()
  // 增加
  for (var i = 0; i < 10; i++) {
    sd.add(i)
  }
  for (var j = 5; j < 15; j++) {
    sd1.add(j)
  }
  var arr = [...sd]
  console.log(arr.filter(val => val % 2 === 0))
  console.log(arr)

  // 并集
  var result = [...new Set([...sd, ...sd1])]
  console.log(result)

  // 交集
  var result1 = [...sd1].filter(val => sd.has(val))
  console.log(result1)

  // 差集
  var result2 = [...sd].filter(val => !sd1.has(val))
  console.log(result2)

  // 方法如下：
  // 删除
  console.log(sd.delete(1)) // 返回布尔值，表示是否删除成功

  // 增加
  console.log(sd.add('lalal')) // 返回Set结构本身

  // 判断是否有某个值
  console.log(sd.has('lalal')) // true

  // 清除所有成员
  sd.clear()

  // 属性如下：
  // 实例中数据总数
  console.log(sd.size) // 0
}
export default {
  mounted () {
    setDemo()
  }
}
</script>