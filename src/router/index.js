import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/test',
          name: 'Test',
          component: Test
        },
        {
          path: '/test',
          name: '逍遥派',
          component: Test
        },
      ]
    }
  ]
})
