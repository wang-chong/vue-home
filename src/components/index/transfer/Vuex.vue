<!-- 非父子组件间使用相同的data -->
<template>
  <div id="page6">
    <h3>非父子组件间通信--vuex</h3>
    <div class="box">
      <component-3></component-3>
    </div>
    <div class="box">
      <component-4 />
    </div>
  </div>
</template>

<script>
import component3 from './component3'
import component4 from './component4'

export default {
  components: {
    'component-3': component3,
    'component-4': component4
  }
}
</script>

<style lang="scss" scoped>
#page6{
  width: 600px;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
  background-color: #efebd0;
  padding: 20px;
  &:after{
    content: '';
    clear: both;
    display: table;
  }
  .box{
    width: 50%;
    float: left;
  }
  h3{
    text-align: center;
  }
}
</style>
