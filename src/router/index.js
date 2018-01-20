import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import Preview from '@/views/Preview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
