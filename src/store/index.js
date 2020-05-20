import Vue from 'vue'
import Vuex from 'vuex'
import childrensbooks from '../assets/childrensbooks.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookDB: childrensbooks.books
  },
  getters: {
    getBookById: (state) => (id) => {
      return state.bookDB.find(book => book.id == id)
    } 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
