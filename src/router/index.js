import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import StudentView from '../views/StudentView.vue'

import store from '../store.js'
// Store session cookie
// check on each route update that session cookie is still valid
// if it is then set internal state variables to proper values
// if internal state variables are already set then no need to check with server


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: 'student/:id',
          name: 'student',
          component: StudentView,
          beforeEnter: function (to, from, next) {
            if (!store.getIsAdmin()) {
              return { name: 'dashboard' }
            } else {
              next()
            }
          }
        }
      ]
    },
    // {
    //   path: '/dashboard/student/:id',
    //   name: 'student',
    //   component: StudentView,
    //   beforeEnter: function(to, from, next) {
    //     if (!store.getIsAdmin()) {
    //       return { name: 'dashboard' }
    //     } else {
    //       next()
    //     }
    //   }
    // }
  ]
})

router.beforeEach((to, from) => {
  if(!store.getIsLoggedIn() && (to.name !== 'login' && to.name !== 'register')) {
    return { name: 'login' }
  }
}) //Check if user is logged in, if not redirect to login page

export default router
