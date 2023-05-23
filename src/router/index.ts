/*
 * @Descriptions: 路由模块
 * @Author: LiuSaiSai
 * @Date: 2023-05-23 15:58:04
 * @LastEditors: Liu SaiSai
 */

import { createRouter, createWebHashHistory } from 'vue-router'

// createRouter 创建路由实例
//  createWebHashHistory 创建一个hash模式的实例
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/layout/index.vue'

// const modules = import.meta.glob('./modules/**/*.ts', { eager: true })

// const routeModuleList: RouteRecordRaw[] = []

// Object.values(modules).forEach((key: any) => {
//   const mod = key.default || []
//   const modList = Array.isArray(mod) ? [...mod] : [mod]
//   routeModuleList.push(...modList)
//   routeModuleList.sort((a, b) => {
//     const orderA = a?.meta?.order || 0
//     const orderB = b?.meta?.order || 0
//     return (orderA as number) - (orderB as number)
//   })
// })

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: '/dashboard/workbench',
    children: [
      {
        path: '/about',
        name: 'about',
        meta: {
          title: '关于',
          icon: 'Mic',
          order: 100,
        },
        component: () => import('@/views/system/About.vue'),
      },
    ],
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   meta: {
  //     title: 'signIn',
  //   },
  //   component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue'),
  // },
  // {
  //   path: '/403',
  //   name: '403',
  //   meta: {
  //     title: '没有权限',
  //   },
  //   component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()
//   document.title = `${to.meta.title} | mocha vue3 admin`
//   const role = userStore.username

//   // if (!role && to.path !== '/login')
//   //   next('/login')

//   // else if (to.meta.permiss && !userStore.userPermiss.includes(to.meta.permiss)) {
//   //   // 如果没有权限，则进入403
//   //   next('/403')
//   // } else {
//   //   next()
//   // }
// })

export default router
