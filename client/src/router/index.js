import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Releases from '@/components/Releases/Index'
import AddRelease from '@/components/AddRelease'
import ViewRelease from '@/components/ViewRelease/Index'
import EditRelease from '@/components/EditRelease'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/releases/:releaseId/edit',
      name: 'edit-release',
      component: EditRelease
    },
    {
      path: '*',
      redirect: 'releases'
    }
  ]
})
