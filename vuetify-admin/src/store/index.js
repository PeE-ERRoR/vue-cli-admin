import Vue from 'vue'
import Vuex from 'vuex'

import items from '../data/items.js'
import sales from '../data/sales.js'
import products from '../data/products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items,
    sales,
    products
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
