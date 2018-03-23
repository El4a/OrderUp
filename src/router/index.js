import Vue from 'vue'
import Router from 'vue-router'
import Drinks from '@/components/DrinksList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'Drinks', //also doesnt seem necessary
      component: Drinks
    }
  ]
})
