<template>
  <div>
    <h2>继承</h2>
    <h3>等待被继承的构造函数</h3>
    <pre>
    function Father () {
      this.print = function () {
        console.log('father print')
      }
    }
    </pre>
    <h3>需要继承的构造函数</h3>
    <pre>
    function Child () {
      Father.apply(this, arguments)
    }
    </pre>
    <h3>继承函数</h3>
    <pre>
    function inherits (child, father) {
      function Inner () {}
      Inner.prototype = father.prototype

      child.prototype = new Inner()
      child.prototype.constructor = father
    }
    </pre>
    <h3>使用例子</h3>
    <pre>
    inherits(Child, Father)
    const child = new Child()
    console.log(child)
    // child包含了father的print方法
    </pre>
  </div>
</template>

<script>
/* eslint-disable */
function Father () {
  this.print = function () {
    console.log('father print')
  }
}

function Child () {
  Father.apply(this, arguments)
}

function inherits (child, father) {
  function Inner () {}
  Inner.prototype = father.prototype

  child.prototype = new Inner()
  // child.prototype = father.prototype
  child.prototype.constructor = father
}

inherits(Child, Father)
const child = new Child()
console.log(child)

export default {}
</script>

