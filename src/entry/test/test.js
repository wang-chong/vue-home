// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Test from '@/components/test/Test'
import router from '@/router/test.js'
import myInput from '@/components/globalComponents/input/'
Vue.use(myInput)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Test/>',
  components: { Test }
})
