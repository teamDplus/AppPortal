import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/Products.vue';
import Post from '../components/Post.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Products },
   { path: '/post', component: Post, meta: { requiresAuth: true } }
  ]
})

export default router
