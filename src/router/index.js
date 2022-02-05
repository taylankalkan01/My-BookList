import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '@/views/Home.vue')
  },
  {
    name: "AddBook",
    path: "/add",
    component: () => import("@/views/AddBook.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
