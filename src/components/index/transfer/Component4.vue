<template>
  <div>
    <h4>组件2</h4>
    <div>我是使用vuex-store的数据pageNo<span>{{pageNo}}</span></div>
    <div>pageNo加上5等于多少呢？<span>{{pageNo}} + 5 = {{page}}</span></div>
    <div>我是来自store里面的title--{{title}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    pageNo () {
      return this.$store.state.pageNo
    },
    // 注意：此处不能用箭头函数，因为用了this，箭头函数后自动联系上下文
    pageTitle: () => {
      console.log(this)
      return this.$store.getters.title
    },
    // ...是展开符，将...后面的对象混入到外部对象中
    ...mapState({
      page: (state) => state.pageNo + 5
      // 下面的属性会覆盖前面的computed--pageNo属性
      // pageNo: state => state.pageNo - 1
    }),
    // 此处也可以传入一个数组，item是getters的属性名，用对象的好处是可以修改计算属性名称
    ...mapGetters({
      title: 'title'
    })
  }
}
</script>

<style lang="scss" scoped>
span{
  color: red;
  font-size: 16px;
}
</style>
