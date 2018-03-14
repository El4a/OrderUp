import Vue from 'vue'
import Router from 'vue-router'
import Drinks from '@/components/drinks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Drinks',
      component: Drinks
    }
  ]
})
