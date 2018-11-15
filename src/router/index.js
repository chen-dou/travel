import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Index',
      component: Index
    },
    {
      path:'/city',
      name:'City',
      component:City  
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail  
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
