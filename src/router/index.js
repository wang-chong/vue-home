import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/index/Header'
import Footer from '@/components/index/Footer'
import Hello1 from '@/components/index/Hello1'
import Hello2 from '@/components/index/Hello2'
import Hello3 from '@/components/index/Hello3'
import imgTest from '@/components/index/imgTest'

// 异步加载组件，会生成独立的js，访问的时候才会去加载
const other = () => import('@/components/index/Other.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: { // 命名视图的写法，一个路由，两个组件
        header: Header,
        footer: Footer
      },
      children: [
        {
          path: 'hello1',
          component: Hello1
        },
        {
          path: 'hello2',
          component: Hello2
        },
        {
          path: 'hello3',
          component: Hello3
        }
      ]
    },
    {
      path: '/footer',
      component: Footer // 简单路由，非命名视图
    },
    {
      path: '/other',
      component: other
    },
    {
      path: '/imgtest',
      component: imgTest
    }
  ],
  linkActiveClass: 'router-active', // 路由激活自动添加的class
  mode: 'hash', // 默认hash，路由模式
  base: '/' // 默认‘/’,应用的根
})
