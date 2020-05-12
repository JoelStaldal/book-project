import Vue from 'vue'
import VueRouter from 'vue-router'
import BookShelf from '../views/BookShelf.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Bookshelf',
    component: BookShelf
  },
  {
    path: '/book/:myParam',
    name: 'Book',
    component: Book
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
