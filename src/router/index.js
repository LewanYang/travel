import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
import City from '../pages/city/city.vue'
import Detail from '../pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
