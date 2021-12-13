import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/views/Project/index.vue'),
    children: [
      {
        path: "TaiwaneseCup",
        name: "TaiwaneseCup",
        component: () => import('@/views/Project/TaiwaneseCup.vue'),
      },
      {
        path: "WebPage",
        name: "WebPage",
        component: () => import('@/views/Project/WebPage.vue'),
      },
      {
        path: "Accessories",
        name: "Accessories",
        component: () => import('@/views/Project/Accessories.vue'),
      },

      {
        path: "*",
        redirect: "/"
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
