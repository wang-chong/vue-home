<template>
  <div v-once>
    <h2>js实现标准二叉树存储方式</h2>
    <h3>构造函数如下</h3>
    <pre>
    function Tree () {
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

      // 删除二叉树的最后一个节点, 且返回节点
      this.removeLast = function () {
        const last = this.last
        let current = this.last
        if (this.floor === 0) {
          return null
        }
        if (this.floor === 1) {
          this.first = null
          this.last = null
          this.floor = 0
          return last
        }
        if (current === current.father.lc) {
          while (current.father) {
            // 左节点
            if (current === current.father.lc) {
              current = current.father
              continue
            }
            if (current === current.father.rc) {
              current = current.father.lc
              while (current.rc) {
                current = current.rc
              }
              this.last = current
              // 需要把删除之前的最后一个节点在父节点的子节点置为null,否则还可以遍历出来
              last.father.lc = null
              return last
            }
          }
          while (current.rc) {
            current = current.rc
          }
          last.father.lc = null
          this.last = current
          this.floor--
          return last
        }
        if (current === current.father.rc) {
          current.father.rc = null
          this.last = current.father.lc
          return last
        }
      }
      // 删除二叉树的最后一个节点, 不返回节点
      this.removeLastWithoutBack = function () {
        let last = this.removeLast()
        last = null
        return last
      }

      // 深度优先遍历（先序）
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

        // 深度优先另一种实现方式
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

      // 获取二叉树的层数
      this.getFloor = function () {
        return this.floor
      }
    }
    </pre>
    <h3>方法如下</h3>
    <pre>
      // 向二叉树加入一个数据
      <span>add(data)</span>;

      // 移除最后一个数据(且返回最后一个数据)
      <span>removeLast()</span>;

      // 移除最后一个数据(<span>不返回</span>最后一个数据)
      <span>removeLastWithoutBack()</span>;
      
      // 深度优先遍历二叉树
      <span>toStringDeepFirst()</span>;

      // 广度优先遍历二叉树
      <span>toStringBreadthFirst()</span>;

      // 获取二叉树的层数
      <span>getFloor()</span>;
    </pre>
    <h3>实例使用如下</h3>
    <pre>
    const tree = new Tree()
    tree.add('A')
    tree.add('B')
    tree.add('C')
    tree.add('D')
    console.log('-------------深度优先遍历结果-------------')
    let str = tree.toStringDeepFirst() // A,B,D,C
    console.log(str)
    console.log('-------------广度优先遍历结果-------------')
    str = tree.toStringBreadthFirst() // A,B,C,D
    console.log(str)
    console.log('-------------删除最后一个节点-------------')
    const last = tree.removeLast()
    console.log('--------------最后一个节点----------------')
    console.log(last) // Node {ele: "D", lc: null, rc: null, father: Node}
    console.log('-------------广度优先遍历结果-------------')
    str = tree.toStringBreadthFirst()
    console.log(str) // A,B,C
    console.log('---------------添加一个节点---------------')
    tree.add('D') 
    str = tree.toStringBreadthFirst()
    console.log(str) // A,B,C,D
    console.log('--------------当前二叉树的层数------------')
    console.log(tree.getFloor()) // 3
    </pre>
  </div>
</template>

<script>
import { Tree } from '@/assets/js/CommonUtil'

export default {
  mounted () {
    const tree = new Tree()
    tree.add('A')
    tree.add('B')
    tree.add('C')
    tree.add('D')
    console.log('-------------深度优先遍历结果-------------')
    let str = tree.toStringDeepFirst()
    console.log(str)
    console.log('-------------广度优先遍历结果-------------')
    str = tree.toStringBreadthFirst()
    console.log(str)
    console.log('-------------删除最后一个节点-------------')
    const last = tree.removeLast()
    console.log('--------------最后一个节点----------------')
    console.log(last)
    console.log('-------------广度优先遍历结果-------------')
    str = tree.toStringBreadthFirst()
    console.log(str)
    console.log('---------------添加一个节点---------------')
    tree.add('D')
    str = tree.toStringBreadthFirst()
    console.log(str)
    console.log('--------------当前二叉树的层数------------')
    console.log(tree.getFloor())
  }
}
</script>
