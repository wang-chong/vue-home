<template>
  <div></div>
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
  }
}
</script>