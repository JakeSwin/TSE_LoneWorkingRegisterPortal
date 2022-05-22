import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import StudentView from '../views/StudentView.vue'

// add dynamic route parameter to each route
// have this value change based on a hash function of the current date
// also a secret value
// this will only allow people to access this site if they have this secret value
// the exact same function will be running on the pi which will link people to the correct URL if they scan the bar code
// it is essentially a dynamic URL that changes every day and only accepts you onto the site if you scan the QR code
// cut hash short
// hash current datetime if current date time is before 6AM + some secret pass
// will link to special component and store special cookie on your browser to allow you to use site
import store from '../store.js'

const routes = [
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

//Check if user is logged in, if not redirect to login page
router.beforeEach((to, from) => {
  if(!store.getIsLoggedIn() && (to.name !== 'login' && to.name !== 'register')) {
    return { name: 'login' }
  }
})

export { routes }

export default router
