import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticlePage from '../views/ArticlePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/artigos/:slug', name: 'article', component: ArticlePage, props: true },
  ],
})

export default router
