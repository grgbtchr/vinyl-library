import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Releases from '@/components/Releases'
import AddRelease from '@/components/AddRelease'
import ViewRelease from '@/components/ViewRelease'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/releases',
      name: 'releases',
      component: Releases
    },
    {
      path: '/releases/add',
      name: 'add-release',
      component: AddRelease
    },
    {
      path: '/releases/:releaseId',
      name: 'release',
      component: ViewRelease
    }
  ]
})
