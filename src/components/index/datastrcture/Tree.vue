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
    tree.add('D')
    tree.add('E')
    tree.add('F')
    tree.add('G')
    tree.add('H')
    tree.add('I')
    tree.add('J')
    console.log('-------------深度优先遍历-------------')
    let str = tree.toStringDeepFirst()
    console.log(str)
    console.log('-------------广度优先遍历-------------')
    str = tree.toStringBreadthFirst()
    console.log(str)
    console.log('-------------删除最后一个节点---------')
    // tree.removeLast()
    str = tree.toStringBreadthFirst()
    console.log(str)
    console.log(tree)
  }
}
</script>

