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
    <h3>ES6 class</h3>
    <pre>
    class SuperClass {
      superPrint () {
        console.log('superprint')
        console.log('className=' + this.className)
      }

      static superMethod () {
        console.log('it is static superMethod')
      }
    }

    class SubClass extends SuperClass {
      constructor () {
        super()
        this.className = 'SubClass'
      }
    }

    new SubClass().superPrint()
    console.log(new SubClass())
    SuperClass.superMethod()
    /*
    * 打印信息如下
    * superprint
    * className=SubClass
    * 子类，原型链上有父类方法，静态方法不能被继承，只能通过父类直接调用，不需要实例
    * it is static superMethod
    */
    </pre>
    <h3>实现只能被继承的类</h3>
    <pre>
    class Animal {
      constructor () {
        if (new.target === Animal) {
          throw new Error('此类必须被继承才能使用')
        }
      }

      shout () {
        console.log('不知道该怎么叫...')
      }
    }

    // new Animal()

    class Dog extends Animal {
      shout () {
        console.log('旺旺')
      }
    }

    new Dog().shout()
    </pre>
    <p>Animal类只能被继承才能实现shout方法，不能直接实例化，类似于java中的接口</p>
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

class SuperClass {
  superPrint () {
    console.log('superprint')
    console.log('className=' + this.className)
  }

  static superMethod () {
    console.log('it is static superMethod')
  }
}

class SubClass extends SuperClass {
  constructor () {
    super()
    this.className = 'SubClass'
  }
}

new SubClass().superPrint()
console.log(new SubClass())
SuperClass.superMethod()

class Animal {
  constructor (age) {
    if (new.target === Animal) {
      throw new Error('此类必须被继承才能使用')
    } else {
      this.age = age
    }
  }

  shout () {
    console.log('不知道该怎么叫...')
  }
}

// new Animal()

class Dog extends Animal {
  constructor (age, weight) {
    super(age)
    this.weight = weight
  }
  shout () {
    console.log('旺旺')
  }
}

const dog = new Dog(2, 10)
dog.shout()
console.log(dog)

export default {}
</script>
