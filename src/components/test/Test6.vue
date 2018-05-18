<template>
  <div>
    <input name="cellphone" :disabled="(state > 0)" /><br>
    <input name="password" v-show="state > 0" /><br>
    <input name="captcha" v-show="state === 2" />
    <p v-show="state > 0" @click="lastStep">返回</p>
    <p @click="nextStep">下一步</p>
    <ul id="lalal">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
function createNode (t) {
  var li = document.createElement('li')
  var text = document.createTextNode(t)
  li.appendChild(text)
  return li
}

function fragmentDemo () {
  var li = document.getElementsByTagName('li')
  console.log(li)
  var fragment = document.createDocumentFragment()
  // var list = [...li]
  var list = Array.prototype.slice.call(li)
  list.forEach(val => fragment.appendChild(val))
  // list.map(val => fragment.appendChild(val))
  for (var i = 0; i < 5; i++) {
    var node = createNode(i + 'f')
    fragment.appendChild(node)
  }
  console.log(fragment)
  document.getElementById('lalal').appendChild(fragment)
}

function setDemo () {
  const sd = new Set()
  const sd1 = new Set()
  for (var i = 0; i < 10; i++) {
    sd.add(i)
  }
  for (var i = 5; i < 15; i++) {
    sd1.add(i)
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
}

function test (...args) {
  console.log(args)
}
test(1,2,3,4)
test(5)

export default {
  data () {
    return {
      state: 0
    }
  },
  mounted () {
    fragmentDemo()
    setDemo()
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