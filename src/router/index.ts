
import HomePage from '../components/HomePage.vue';
import Feature from '../components/Feature.vue';
import Portfolio from '../components/Portfolio.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/feature',
      name: 'Feature',
      component: Feature
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
  ]
})








export default router
