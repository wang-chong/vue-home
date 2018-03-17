<template>
  <div>
    <h3>chilren1的数据如下，继承自Father3</h3>
    <p>origin.master.num={{ origin.master.num }}</p>
    <button @click="changeNum">改变num为5</button>
  </div>
</template>

<script>
import father3 from './Father3'
export default {
  extends: father3,
  methods: {
    changeNum () {
      this.origin.master.num = 5
    },
    getOrigin () {
      return this.origin
    }
  }
}
</script>
