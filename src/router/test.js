import Vue from 'vue'
import Router from 'vue-router'

import Test1 from '@/components/test/Test1'
import Test2 from '@/components/test/Test2'
import Test3 from '@/components/test/Test3'
import Test4 from '@/components/test/Test4'
import Test5 from '@/components/test/Test5'
import Test6 from '@/components/test/Test6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test1',
      component: Test1
    },
    {
      path: '/test2',
      component: Test2
    },
    {
      path: '/test3',
      component: Test3
    },
    {
      path: '/test4',
      component: Test4
    },
    {
      path: '/test5',
      component: Test5
    },
    {
      path: '/test6',
      component: Test6
    }
  ],
  linkActiveClass: 'router-active', // 路由激活自动添加的class
  linkExactActiveClass: 'exact-active', // 路由全路径匹配时自动添加的class
  mode: 'hash', // 默认hash，路由模式
  base: '/' // 默认‘/’,应用的根
})
