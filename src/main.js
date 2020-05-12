import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import childrensbooks from './assets/childrensbooks.json';

new Vue({
  data(){
    return {
      bookDB: childrensbooks.books
    }
  },
  methods: {
    getBook(id){
      return this.bookDB.find(book => book.id == id)
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
