<template>
  <div class="header-container" v-once>
    <div class="header-menu">
      <ul class="menu">
        <router-link
          v-for="item in links"
          :to="{path: item.value}"
          tag="li"
          class="menu"
          :key="item.value">
          <a class="menu">{{item.name}}</a>
          <span class="arrow" v-if="item.submenus"></span>
          <ul class="submenu" v-if="item.submenus">
            <router-link
              v-for="menu in item.submenus"
              :to="{ path: menu.value }"
              tag="li"
              class="submenu"
              :key="menu.value"
              exct>
              <a>{{menu.name}}</a>
            </router-link>
          </ul>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          name: 'plugin',
          value: '/plugin',
          submenus: [{
            name: 'dropload',
            value: '/plugin/page1'
          }, {
            name: 'detailList',
            value: '/plugin/hello2'
          }, {
            name: '展开效果',
            value: '/plugin/hello3'
          }]
        }, {
          name: '图片',
          value: '/img',
          submenus: [{
            name: '头像截图',
            value: '/img/cut'
          }, {
            name: '图形居中汇总',
            value: '/img/center'
          }]
        }, {
          name: '组件通信',
          value: '/transfer',
          submenus: [{
            name: 'bus',
            value: '/transfer/bus'
          }, {
            name: 'vuex',
            value: '/transfer/vuex'
          }]
        }, {
          name: '过滤器',
          value: '/filter'
        },
        {
          name: '异步',
          value: '/async',
          submenus: [{
            name: 'promise',
            value: '/async/promise'
          }, {
            name: 'wait(未开发)',
            value: '/async/promise'
          }]
        },
        {
          name: '多线程',
          value: '/thread',
          submenus: [{
            name: 'Javascipt',
            value: '/thread/javascript'
          }, {
            name: 'Java',
            value: '/thread/java'
          }, {
            name: 'Java线程通信',
            value: '/thread/java_transfer'
          }]
        },
        {
          name: '数据结构',
          value: '/datastrcture',
          submenus: [{
            name: '链表(linkedlist)',
            value: '/datastrcture/linkedlist'
          }]
        },
        {
          name: '其他基础',
          value: '/basic',
          submenus: [{
            name: 'Bind函数(apply/call)',
            value: '/basic/bind'
          }, {
            name: 'js懒加载',
            value: '/basic/lazyload'
          }]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/frame.scss';
.header-container{
  height: $headerHeight;
}
.header-menu{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: $headerHeight;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 1px #e5e5e5;
  min-width: 8rem;
  ul.menu{
    float: right;
    padding-right: 0.3rem;
    li.menu{
      display: block;
      float: left;
      height: $headerHeight;
      padding: 0 0.12rem;
      line-height: $headerHeight;
      font-size: 0.16rem;
      position: relative;
      &:hover{
        ul.submenu{
          display: block;
        }
        a.menu{
          opacity: 0.8;
        }
      }
      &:hover, &.router-active{
        a.menu{
          color: $activeColor;
          padding-bottom: 0.1rem;
          border-bottom: 2px solid $activeColor;
        }
        .arrow{
          border-color: $activeColor transparent transparent transparent;
        }
      }
      .arrow{
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        border-width: 5px 5px 0;
        border-style: solid;
        border-color: #333 transparent transparent transparent;
      }
    }
  }
}
ul.submenu{
  position: absolute;
  right: 0.12rem;
  top: 70%;
  padding: 0.1rem 0.2rem 0.1rem 0.25rem;
  white-space: nowrap;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 1px #ddd;
  border-radius: 3px;
  display: none;
  li.submenu{
    line-height: 2;
    font-size: 0.14rem;
    position: relative;
    &:hover, &.router-exact-active{
      a{
        color: $activeColor;
      }
    }
    &.router-exact-active{
      &:before{
        content: '';
        position: absolute;
        left: -0.1rem;
        top: 0.09rem;
        border-style: solid;
        border-width: 0.05rem 0 0.05rem 0.05rem;
        border-color: transparent transparent transparent $activeColor;
        height: 0;
        width: 0;
      }
    }
  }
}
</style>