import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoreView from '../views/MoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/applications',
    //   name: 'applications',
    //   component: ApplicationView
    // },
    // {
    //   path: '/TGbots',
    //   name: 'TGbots',
    //   component: TGbotsView
    // },
    {
      path: '/more',
      name: 'more',
      component: MoreView
    }
  ]
})

export default router
