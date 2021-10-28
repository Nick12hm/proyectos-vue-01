import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "Home" */ '../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "Servicios" */ '../views/Servicios.vue')
  },
  {
    path: '/Fotos/:id',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "Fotos" */ '../views/Fotos.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
