<template>
  <div class="hello3">
    展开效果
    <ul class="menu">
      <li v-for="(item, idx) in menus">
        <div class="title" @click="changeIndex(idx)">{{item.title}}</div>
        <div ref="content" class="content" :style="{'height': (index === idx ? height : 20) + 'px'}">
          {{item.content}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: '',
      menus: [{
        title: 'menu1',
        content: '可打开的即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨科技和海发第三方加快了健康'
      }, {
        title: 'menu2',
        content: '99即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨即可拉上来可点击街坊邻里回复客户萨99'
      }],
      height: 0
    }
  },
  methods: {
    changeIndex (idx) {
      const vm = this
      if (vm.index === idx) {
        vm.height = 0
        vm.index = ''
      } else {
        vm.index = idx
        vm.height = vm.$refs.content[idx].scrollHeight
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hello3{
  position: absolute;
  top: 0;
  width: 260px;
  .menu{
    li{
      margin: 10px;
      cursor: pointer;
      .content{
        height: 0;
        overflow: hidden;
        will-change: height;
        transition: all .3s ease-out;
      }
    }
  }
}
</style>