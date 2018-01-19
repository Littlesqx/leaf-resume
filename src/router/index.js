import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/views/Base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Base
    }
  ]
})
