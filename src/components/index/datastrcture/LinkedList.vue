<template>
  <div>
    <h2>js实现链表存储方式</h2>
    <h3>链表构造函数如下</h3>
    <pre>
    function LinkedList () {
      this.first = null
      this.last = null
      this.size = 0

      function Node (ele) {
        this.next = null
        this.prev = null
        this.ele = ele
      }

      // 向链表前面添加一个元素
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

      // 向链表后面添加一个元素
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

      // 删除第一个元素并返回第一个元素
      this.removeFirst = function () {
        if (this.size === 0) {
          return null
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
      // 删除第一个元素，不返回元素
      this.removeFirstWithoutBack = function () {
        let first = this.removeFirst()
        first = null
        return first
      }

      // 删除最后一个元素并且返回最后一个元素
      this.removeLast = function () {
        if (this.size === 0) {
          return null
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
      // 删除最后一个元素，不返回元素
      this.removeLastWithoutBack = function () {
        let last = this.removeLast()
        last = null
        return last
      }

      // 删除指定索引的元素并且返回指定元素
      this.removeIndex = function (index) {
        if (index >= this.size || index <= 0) {
          return null
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
                return currentNode
              }
            }
            break
        }
      }
      // 删除指定索引的元素，不返回元素
      this.removeIndexWithoutBack = function (index) {
        let indexNode = this.removeIndex(index)
        indexNode = null
        return indexNode
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
    </pre>
    <h3>方法如下</h3>
    <pre>
      // 向链表后端插入一个数据
      <span>addLast(data)</span>;

      // 向链表前端插入一个数据
      <span>addFirst(data)</span>;

      // 移除最后一个数据(且返回最后一个数据)
      <span>removeLast()</span>;

      // 移除最后一个数据(<span>不返回</span>最后一个数据)
      <span>removeLastWithoutBack()</span>;

      // 移除第一个数据(返回第一个数据)
      <span>removeFirst()</span>;

      // 移除第一个数据(<span>不返回</span>第一个数据)
      <span>removeFirstWithoutBack()</span>;
      
      // 移除指定索引index的数据，索引从1开始(删除成功返回true,否则返回false)
      <span>removeIndex(index)</span>;
    </pre>
    <h3>实例使用如下</h3>
    <pre>
      const list = new LinkedList()
      list.addLast('A')
      list.addLast('B')
      list.addLast('C')
      list.addFirst('a')
      list.addFirst('b')
      list.addFirst('c')
      console.log(list.toString()) // c,b,a,A,B,C
      list.removeLast()
      console.log(list.toString()) // c,b,a,A,B
      list.removeFirst()
      console.log(list.toString()) // b,a,A,B
      list.removeIndex(2)
      console.log(list.toString()) // b,A,B
    </pre>
  </div>
</template>

<script>
import { LinkedList } from '@/assets/js/CommonUtil'

export default {
  mounted () {
    const list = new LinkedList()
    list.addLast('A')
    list.addLast('B')
    list.addLast('C')
    list.addFirst('a')
    list.addFirst('b')
    list.addFirst('c')
    console.log(list.toString())
    list.removeLast()
    console.log(list.toString())
    list.removeFirst()
    console.log(list.toString())
    list.removeIndex(2)
    console.log(list.toString())
  }
}
</script>