import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutationTypes'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageNo: 0,
    pageTitles: [
      'page1',
      'page2',
      'page3'
    ]
  },
  getters: {
    title: (state) => {
      return state.pageTitles[0]
    }
  },
  mutations: {
    [INCREMENT] (state, args) {
      if (args) {
        state.pageNo = args.num
      } else {
        state.pageNo++
      }
    }
  }
})

export default store
