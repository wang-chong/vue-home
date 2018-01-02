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
  },
  actions: {
    [INCREMENT] ({ commit }, args) {
      // 此处可以有异步操作，然后再去更新state
      setTimeout(() => {
        commit(INCREMENT, args)
      }, 2000)
    }
  }
})

export default store
