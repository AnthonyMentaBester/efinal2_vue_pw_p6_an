import { createRouter, createWebHashHistory } from 'vue-router'
import Vehiculo from '@/components/Vehiculo.vue'
import ConsultarVehiculo from '@/components/ConsultarVehiculo.vue'

const routes = [
  {
    path: '/VehiculoAgregar',
    name: 'VehiculoAgregar',
    component: Vehiculo
  },
  {
    path: '/VehiculoConsultar',
    name: 'VehiculoConsultar',
    component: ConsultarVehiculo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
