import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/test/Home'
import NewPage from '@/components/test/NewPage'
import Hello1 from '@/components/test/Hello1'
import Hello2 from '@/components/test/Hello2'
import Hello3 from '@/components/test/Hello3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home1',
      redirect: '/home1/hello1',
      component: Home,
      children: [
        {
          path: 'hello1',
          name: 'hello1',
          component: Hello1
        },
        {
          path: 'hello2',
          name: 'hello2',
          component: Hello2
        },
        {
          path: 'hello3',
          name: 'hello3',
          component: Hello3
        }
      ]
    },
    {
      path: '/home2',
      redirect: '/home2/hello1',
      component: Home,
      children: [
        {
          path: 'hello1',
          name: 'hello3',
          component: Hello1
        },
        {
          path: 'hello2',
          name: 'hello4',
          component: Hello2
        },
        {
          path: 'hello3',
          name: 'hello5',
          component: Hello3
        }
      ]
    },
    {
      path: '/newpage',
      component: NewPage
    }
  ],
  linkActiveClass: 'router-active', // 路由激活自动添加的class
  linkExactActiveClass: 'exact-active', // 路由全路径匹配时自动添加的class
  mode: 'hash', // 默认hash，路由模式
  base: '/' // 默认‘/’,应用的根
})
