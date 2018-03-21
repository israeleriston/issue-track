import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/internals/Content'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Content
  }]
})
