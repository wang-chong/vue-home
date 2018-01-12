function LinkedList () {
  this.first = null
  this.last = null
  this.size = 0

  function Node (ele) {
    this.next = null
    this.prev = null
    this.ele = ele
  }

  this.addFirst = function (ele) {
    var node = new Node(ele)
    node.next = this.first
    if (this.size > 0) {
      this.first.prev = node
    }
    this.first = node
    if (this.size === 0) {
      this.last = this.first
    } else {

    }
    this.size++
  }

  this.addLast = function (ele) {
    var node = new Node(ele)
    node.prev = this.last
    if (this.size > 0) {
      this.last.next = node
    }
    this.last = node
    if (this.size === 0) {
      this.first = this.last
    }
    this.size++
  }

  this.removeFirst = function () {
    if (this.size === 0) {
      return false
    }
    this.first = this.first.next
    if (this.first) {
      this.first.prev = null
    } else {
      this.last = null
    }
    this.size--
    return true
  }

  this.removeLast = function () {
    if (this.size === 0) {
      return false
    }
    this.last = this.last.prev
    if (this.last) {
      this.last.next = null
    } else {
      this.first = null
    }
    this.size--
    return true
  }

  this.removeIndex = function (index) {
    if (index >= this.size || index <= 0) {
      return false
    }
    switch (index) {
      case 1:
        this.removeFirst()
        break
      case (this.size - 1):
        this.removeLast()
        break
      default:
        let count = 1
        let currentNode = this.first
        while (count !== index) {
          count++
          currentNode = currentNode.next
          if (count === index) {
            currentNode.prev.next = currentNode.next
            currentNode.next.prev = currentNode.prev
            currentNode = null
          }
        }
        break
    }
    return true
  }

  this.toString = function () {
    var currentNode = this.first
    var arr = []
    while (currentNode) {
      arr.push(currentNode.ele)
      currentNode = currentNode.next
    }
    return '[' + arr.join(',') + ']'
  }
}

export {
  LinkedList
}
