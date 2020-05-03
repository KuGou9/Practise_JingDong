import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    // name: 'Home',
    // component: Home
    redirect: "/btnbar/home"
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue')
  },
  {
    path: "/btnbar",
    component: () => import('../views/ButtonBar.vue'),
    children: [{
        path: "home",
        name: "home",
        component: () => import('../views/Home.vue')
      }, {
        path: "classify",
        name: "classify",
        component: () => import('../views/Classify.vue')
      },
      {
        path: "faxian",
        name: "faxian",
        component: () => import('../views/FaXian.vue')
      }, {
        path: "car",
        name: "car",
        meta: {
          requireAuth: true, //当有这个字段的时候，我们认为这个路由页面是需要登录权限的
        },
        component: () => import('../views/Car.vue')
      }, {
        path: "me",
        name: "me",
        meta: {
          requireAuth: true, //当有这个字段的时候，我们认为这个路由页面是需要登录权限的
        },
        component: () => import('../views/Me.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router