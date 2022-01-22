import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostList from '../views/PostList.vue'
import PostDetails from '../views/PostDetails.vue'
import VuexTodo from '../views/VuexTodo.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post-list',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/Post-details/:id',
    name: 'PostDetails',
    component: PostDetails
  },
  {
    path: '/Vuex-todo',
    name: 'VuexTodo',
    component: VuexTodo
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
