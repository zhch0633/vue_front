import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import APITest from '@/components/APITest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/api',
      name: 'api',
      component: APITest
    }
  ]
})
