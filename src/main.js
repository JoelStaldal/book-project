import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import json from './json/childrensbooks.json';

new Vue({
  data(){
    return {
      myBookDB: json
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
