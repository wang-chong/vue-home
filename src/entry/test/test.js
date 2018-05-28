// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Test from '@/components/test/Test'
import router from '@/router/test.js'
import { Upload } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HInput from '@/components/globalComponents/HInput/'
Vue.use(HInput)

Vue.component(Upload.name, Upload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Test/>',
  components: { Test }
})
