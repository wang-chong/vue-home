<template>
  <div>
    <h2>bind函数实现</h2>
    <pre>
      /* eslint-disable */
      Function.prototype.bind = Function.prototype.bind || function (context) {
        const that = this
        return function () {
          return that.apply(context, arguments)
        }
      }
      const obj = {
        testVar: 'lalal'
      }
      const testVar = 'lol'
      let func = function () {
        console.log(this.testVar)
      }
      func() // undefined
      func = func.bind(obj)
      func() // lalal
    </pre>
    <h3>call&apply</h3>
    <pre>
      // function.apply(obj, array||arguments)
      // 代表将function里面的this指针指向obj
      // 所以如果在function中运行this.prop,结果将是obj里面的prop属性值，如下：
      const obj1 = {
        applyVar: 'test123'
      }
      function applyDemo() {
        console.log(this.applyVar)
      }
      applyDemo() // undefined
      applyDemo.apply(obj1) // test123

      <span>备注：call和apply的用法相同</span>;
      <span>差别在于apply的第二个参数只能是数组或者arguments,call可以传任意类型的参数</span>。
      运行以下语句可以将arguments转换为数组，从而可以让apply进行数组传参
      <span>Array.prototype.slice.call(arguments)</span>;
      ES6可用
      <span>Array.from(arguments);</span>
    </pre>
    <h3>利用call&apply实现继承</h3>
    <pre>
      // 利用call/apply来实现继承
      function ParentFunc(name, age) {
        this.name = name
        this.age = age
        this.printInfo = function () {
          console.log('name=' + this.name + '&age=' + this.age + '&height=' + this.height)
        }
      }

      // 继承ParentFunc里面的所有内容
      // 但是此时ParentFunc里面的<span>this</span>指向<span>ChildFunc</span>.
      function ChildFunc(name, age) {
        this.height = '185'
        ParentFunc.call(this, name, age)
        // ParentFunc.apply(this, arguments) // 效果一样
      }

      const child = new ChildFunc('小张', '19')
      child.printInfo() // name=小张&age=19&height=185

      new ParentFunc('小张', '19').printInfo() //name=小张&age=19&height=undefined
    </pre>
  </div>
</template>

<script>
/* eslint-disable */
Function.prototype.bind = Function.prototype.bind || function (context) {
  const that = this
  return function () {
    return that.apply(context, arguments)
  }
}
const obj = {
  testVar: 'lalal'
}
const testVar = 'lol'
let func = function () {
  console.log(this.testVar)
}
func() // undefined
func = func.bind(obj)
func() // lalal

// function.apply(obj, array||arguments)
// 代表将function里面的this指针指向obj，所以如果在function中运行this.prop,结果将是obj里面的prop属性值，如下：
const obj1 = {
  applyVar: 'test123'
}
function applyDemo() {
  console.log(this.applyVar)
}
applyDemo() // undefined
applyDemo.apply(obj1) // test123

// 利用call/apply来实现继承
function ParentFunc(name, age) {
  this.name = name
  this.age = age
  this.printInfo = function () {
    console.log('name=' + this.name + '&age=' + this.age + '&height=' + this.height)
  }
}

function ChildFunc(name, age) {
  console.log(arguments)
  this.height = '185'
  ParentFunc.call(this, name, age)
  // ParentFunc.apply(this, arguments) // 效果一样
}

const child = new ChildFunc('小张', '19')
child.printInfo() // name=小张&age=19&height=185

new ParentFunc('小张', '19').printInfo() //name=小张&age=19&height=undefined
</script>
