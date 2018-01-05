<!-- 测试非父子组件间的参数传递 -->
<template>
  <div id="bus">
    <h3>非父子组件间通信--bus</h3>
    <div class="box">
      <component-1></component-1>
    </div>
    <div class="box">
      <component-2></component-2>
    </div>
  </div>
</template>

<script>
import component1 from './component1'
import component2 from './component2'

export default {
  components: {
    'component-1': component1,
    'component-2': component2
  }
}
</script>

<style lang="scss" scoped>
#bus{
  width: 6rem;
  margin: 0 auto;
  padding: 0.3rem;
  position: relative;
  background-color: #efebd0;
  border-radius: 8px;
  margin-top: 0.3rem;
  &:after{
    content: '';
    clear: both;
    display: table;
  }
  .box{
    width: 50%;
    float: left;
  }
}
</style>
