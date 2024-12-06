import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/PaginaInicio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/PaginaPrincipal.vue'),
    },
    {
      path: '/detalle/:id',
      name: 'detalle',
      component: () => import('@/views/PaginaDetalles.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/PaginaContacto.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
