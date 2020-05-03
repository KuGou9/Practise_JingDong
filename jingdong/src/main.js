import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Cube from 'cube-ui'
import axios from 'axios'
import setAxios from './setAxios'

setAxios()

Vue.use(Cube)
// 为了防止在使用axios的时候都需要重新引入，所以我们直接挂载到vue上
Vue.prototype.$http = axios

// 路由守卫
router.beforeEach((to, from, next) => {
  // 无论是刷新还是跳转路由，首先第一个进入的就是这个路由钩子函数
  store.commit("setToken", localStorage.getItem("token"));
  // 如果需要登陆权限,则检查是否已经登陆,检查localStorage是否有token
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')