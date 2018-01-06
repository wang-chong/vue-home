<template>
  <div>
    <p>我是懒加载组件，通过懒加载引入的哦，不信你看network，真的加载了js呢~</p>
    <h3>结合webpack和vue实现的懒加载，分离打包</h3>
    <pre>
    	const lazyload = () => import('@/components/index/basic/Lazyload.vue')
    	路由或者vue实例中组件可以直接用lazyload
    	components: {
    		lazyload: lazyload
    	}
    </pre>
  </div>
</template>