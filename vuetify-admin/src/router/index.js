import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Signin from '../views/Signin'
import Admin from '../views/Admin'
import Dasbord from '../views/Dasbord'
import Stock from '../views/Stock'
import Item from '../views/Item'
import Images from '../views/Images'
import Product from '../views/products/Product'
import Promotion from '../views/promotion/Promotion'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'promotion',
        component: Promotion
      },
      {
        path: '/products',
        name: 'products',
        component: Product
      }
    ]
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '/dasbord',
        name: 'dasbord',
        component: Dasbord
      },
      {
        path: '/signout',
        name: 'signout',
        component: Home
      },
      {
        path: '/stock',
        name: 'stock',
        component: Stock
      },
      {
        path: '/item',
        name: 'item',
        component: Item
      },
      {
        path: '/images',
        name: 'images',
        component: Images
      }
    ]
  },
  {
    path: '/signup',
    name: 'signup',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
