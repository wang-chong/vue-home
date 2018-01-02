// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '@/components/index/Index'
import router from '@/router/'
import store from '@/store/' // vuex
import filter from '@/assets/js/Filter'

import myInput from '@/components/globalComponents/input/'
import detailList from 'vue-detail-list'
import dropload from 'vue-dropload-m'

Vue.use(detailList)
Vue.use(dropload)
Vue.use(myInput)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  filter,
  template: '<Index/>',
  components: { Index }
})
