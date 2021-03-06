import Vue from 'vue'
import VueRouter from 'vue-router'
import BookShelf from '../views/BookShelf.vue'
import BookInfo from '../views/BookInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Bookshelf',
    component: BookShelf
  },
  {
    path: '/book/:myParam',
    name: 'BookInfo',
    component: BookInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
