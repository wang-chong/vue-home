// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '@/components/index/Index'
import router from '@/router/'
import myInput from '@/components/globalComponents/input/'
import detailList from 'vue-detail-list'
Vue.use(detailList)
Vue.use(myInput)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index }
})
