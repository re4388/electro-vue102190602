import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: require('@/components/Homepage').default
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: require('@/components/Demo1').default
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: require('@/components/Demo2').default
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: require('@/components/Demo3').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
