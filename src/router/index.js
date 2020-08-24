import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../views/index'

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../views/review')
  },
  {
    path: '/today-study',
    name: 'todayStudy',
    component: () => import('../views/today-study')
  },
  {
    path: '/honour-list',
    name: 'honourList',
    component: () => import('../views/honour-list')
  },
  {
    path: '/read-room-unit',
    name: 'unitList',
    component: () => import('../views/read_room/unit-list')
  },
  {
    path: '/read-room-course',
    name: 'courseList',
    component: () => import('../views/read_room/course-list')
  },
  {
    path: '/read-room-content',
    name: 'contentList',
    component: () => import('../views/read_room/content-list')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine')
  },
  {
    path: '/welcome-game',
    name: 'welcomeGame',
    component: () => import('../views/welcome-game')
  }
]

const vueRouter = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

export default vueRouter