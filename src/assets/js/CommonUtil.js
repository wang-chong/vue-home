export const LinkedList = function () {
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
    const first = this.first
    this.first = this.first.next
    if (this.first) {
      this.first.prev = null
    } else {
      this.last = null
    }
    this.size--
    return first
  }

  this.removeLast = function () {
    if (this.size === 0) {
      return false
    }
    const last = this.last
    this.last = this.last.prev
    if (this.last) {
      this.last.next = null
    } else {
      this.first = null
    }
    this.size--
    return last
  }

  this.removeIndex = function (index) {
    if (index >= this.size || index <= 0) {
      return false
    }
    switch (index) {
      case 1:
        return this.removeFirst()
      case (this.size - 1):
        return this.removeLast()
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
    return arr.join(',')
  }
}

export const Tree = function () {
  this.first = null
  this.last = null
  this.floor = 0

  function Node (ele) {
    this.ele = ele
    this.lc = null
    this.rc = null
    this.father = null
  }
  // 往二叉树加入一个节点
  this.add = function (ele) {
    const node = new Node(ele)
    if (this.floor === 0) { // 一个元素都没有
      this.first = node
      this.floor++
    } else if (this.floor === 1) { // 只有一个元素
      this.last.lc = node
      node.father = this.last
      this.floor++
    } else {
      let current = this.last
      while (current) {
        // 当前节点是父节点的左节点
        if (current.father.lc === current) {
          if (current.father.rc) {
            // 父节点有右节点
            current = current.father.rc
            while (current.lc) {
              current = current.lc
            }
            current.lc = node
            node.father = current
            break
          } else {
            // 添加一个兄弟节点
            current.father.rc = node
            node.father = current.father
            break
          }
        // 当前节点是父节点的右节点
        } else {
          if (current.father === this.first) {
            current = this.first
            while (current.lc) {
              current = current.lc
            }
            current.lc = node
            node.father = current
            this.floor++
            break
          }
          current = current.father
        }
      }
    }
    this.last = node
  }
  // 删除二叉树的最后一个节点
  this.removeLast = function () {
  }
  // 深度优先遍历
  this.toStringDeepFirst = function () {
    function next (current) {
      const ele = current.ele
      eleArr.push(ele)
      // 深度优先，所以只要有左节点就继续往下找
      if (current.lc) {
        next(current.lc)
        return
      }
      // 没有左节点，需要看是否有父节点，父节点是否有右节点
      // (不用查看是否有右节点，因为是二叉树，没有左节点一定没有右节点)
      // 关键：父节点的右节点不能是当前节点，否则会死循环
      while (current && current.father) {
        if (current.father.rc && current.father.rc !== current) {
          next(current.father.rc)
          return
        }
        current = current.father
      }
    }

    // function next (current) {
    //   const ele = current.ele
    //   eleArr.push(ele)
    //   if (current.lc) {
    //     next(current.lc)
    //   }
    //   if (current.rc) {
    //     next(current.rc)
    //   }
    // }
    const eleArr = []
    if (this.first) {
      next(this.first)
    }
    return eleArr.join(',')
  }
  // 广度优先遍历
  this.toStringBreadthFirst = function () {
    const eleArr = []
    let current = this.first
    if (!current) {
      return ''
    }
    const linkedList = new LinkedList()
    linkedList.addLast(current)
    while (linkedList.size > 0) {
      // 利用队列来进行节点的遍历，先进先出，先左后右
      const linkedFirst = linkedList.removeFirst().ele
      eleArr.push(linkedFirst.ele)
      if (linkedFirst.lc) {
        linkedList.addLast(linkedFirst.lc)
      }
      if (linkedFirst.rc) {
        linkedList.addLast(linkedFirst.rc)
      }
    }
    return eleArr.join(',')
  }
}
