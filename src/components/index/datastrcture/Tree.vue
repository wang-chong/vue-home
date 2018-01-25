<template>
  <div>
    tree
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
    // console.log('-------------深度优先遍历-------------')
    let str = tree.toStringDeepFirst()
    // console.log(str)
    // console.log('-------------广度优先遍历-------------')
    // str = tree.toStringBreadthFirst()
    // console.log(str)
    console.log('-------------删除最后一个节点---------')
    const last = tree.removeLast()
    // console.log('--------------最后一个节点-------------')
    console.log(last)
    // console.log('--------------上面是最后一个节点-------')
    str = tree.toStringBreadthFirst()
    console.log(str)
    console.log(tree)
    console.log('---------------添加一个节点----------------')
    tree.add('D')
    str = tree.toStringBreadthFirst()
    console.log(str)
    console.log(tree)
  }
}
</script>

