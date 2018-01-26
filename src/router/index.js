import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/index/Header'
import Content from '@/components/index/Content'
import Footer from '@/components/index/Footer'
import Welcome from '@/components/index/Welcome'
import Page1 from '@/components/index/plugin/Hello1'
import Page2 from '@/components/index/plugin/Hello2'
import Page3 from '@/components/index/plugin/Hello3'
// vue的组件通信
import Bus from '@/components/index/transfer/Bus'
import Vuex from '@/components/index/transfer/Vuex'
// 多线程
import Java from '@/components/index/thread/Java'
import Javascript from '@/components/index/thread/Javascript'
import JavaTransfer from '@/components/index/thread/JavaTransfer'
// 过滤器
import Filter from '@/components/index/filter/Filter'
// 图片操作
import Cut from '@/components/index/img/Cut'
import Center from '@/components/index/img/Center'

// 异步加载组件，会生成独立的js，访问的时候才会去加载
// 需要异步加载的组件集合
let asyncComponents = {
  // 其他基础
  lazyload: () => import('@/components/index/basic/Lazyload.vue'),
  bind: () => import('@/components/index/basic/Bind.vue'),
  arrayOperation: () => import('@/components/index/basic/ArrayOperation.vue'),
  inherits: () => import('@/components/index/basic/Inherits.vue'),
  // 数据结构
  linkedlist: () => import('@/components/index/datastrcture/LinkedList.vue'),
  tree: () => import('@/components/index/datastrcture/Tree.vue'),
  // 异步
  promise: () => import('@/components/index/async/promise'),
  generator: () => import('@/components/index/async/Generator'),
  Await: () => import('@/components/index/async/Await')
}

Vue.use(Router)

const ROUTER = new Router({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        default: Welcome,
        footer: Footer
      }
    },
    {
      // 命名视图的写法，一个路由，两个组件, 默认有头有脚,且有过渡
      path: '/plugin',
      components: {
        header: Header,
        content: Content,
        footer: Footer
      },
      children: [
        {
          path: '/',
          alias: 'page1',
          components: {
            transition: Page1
          }
        },
        {
          path: 'hello2',
          components: {
            transition: Page2
          }
        },
        {
          path: 'hello3',
          component: Page3
        }
      ]
    },
    // 图片处理
    {
      // 默认有头有脚,没有过渡
      path: '/img',
      components: {
        header: Header,
        default: Content,
        footer: Footer
      },
      children: [
        {
          path: '/',
          alias: 'cut',
          component: Cut
        },
        {
          path: 'center',
          component: Center
        }
      ]
    },
    // 组件通信
    {
      path: '/transfer',
      components: {
        header: Header,
        default: Content,
        footer: Footer
      },
      children: [
        {
          path: '/',
          alias: 'bus',
          component: Bus
        },
        {
          path: 'vuex',
          component: Vuex
        }
      ]
    },
    // 过滤器
    {
      path: '/filter',
      components: {
        header: Header,
        default: Filter,
        footer: Footer
      }
    },
    // 异步
    {
      path: '/async',
      components: {
        header: Header,
        default: Content
      },
      children: [
        {
          path: '/',
          alias: 'promise',
          component: asyncComponents.promise
        },
        {
          path: 'generator',
          component: asyncComponents.generator
        },
        {
          path: 'await',
          component: asyncComponents.Await
        }
      ]
    },
    // 线程
    {
      path: '/thread',
      components: {
        header: Header,
        default: Content
      },
      children: [
        {
          path: '/',
          alias: 'javascript',
          component: Javascript
        },
        {
          path: 'java',
          component: Java
        },
        {
          path: 'java_transfer',
          component: JavaTransfer
        }
      ]
    },
    // 其他基础
    {
      path: '/basic',
      components: {
        header: Header,
        default: Content
      },
      children: [
        {
          path: '/',
          alias: 'bind',
          component: asyncComponents.bind
        },
        {
          path: 'lazyload',
          component: asyncComponents.lazyload
        },
        {
          path: 'arrayOperation',
          component: asyncComponents.arrayOperation
        },
        {
          path: 'inherits',
          component: asyncComponents.inherits
        }
      ]
    },
    // 数据结构
    {
      path: '/datastrcture',
      components: {
        header: Header,
        default: Content
      },
      children: [
        {
          path: '/',
          alias: 'linkedlist',
          component: asyncComponents.linkedlist
        },
        {
          path: 'tree',
          component: asyncComponents.tree
        }
      ]
    }
  ],
  linkActiveClass: 'router-active', // 路由激活自动添加的class
  linkExactActiveClass: 'router-exact-active', // 路由精确激活自动添加的class
  mode: 'hash', // 默认hash，路由模式
  // 预渲染时使用history模式
  // mode: 'history',
  base: '/' // 默认‘/’,应用的根
})

ROUTER.beforeEach((to, from, next) => {
  // 此处可以做一些路由判断，比如没有匹配到路由就跳转到首页 next('/')
  if (to.matched.length === 0) {
    next('/')
  } else {
    next()
  }
})

export default ROUTER
