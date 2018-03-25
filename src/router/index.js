import Vue from 'vue'
import Router from 'vue-router'
import Drinks from '@/components/DrinksList'
import Orders from '@/components/PendingOrderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'Drinks', //also doesnt seem necessary
      component: Drinks
    },
    {
      path: "/orders",
      component: Orders
    }
  ]
})
