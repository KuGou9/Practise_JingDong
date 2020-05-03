import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token: "",
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [], //存储购物车商品的数组。如果localStorage里面有的话就取出数组，如果没有就为空
  },
  mutations: {
    // mutations里面的方法第一个参数都是state
    setToken(state, token) {
      state.token = token;
    },
    // 往购物车添加商品
    addCartItem(state, list) {
      // 判断购物车中是否已经存在了刚选购的产品
      // 如果已经有的话，good会返回一个对象
      // 传入的list是右边列表选中的项，在分类里面定义的产品元素的属性是label，而在购物车里面定义的属性是title，所以将这两者进行比较，如果相等，说明此时已经存在了对应的商品在购物车里面
      let good = state.cartItems.find(v => v.title == list.label)
      if (good) {
        good.itemCount += 1;
      } else {
        state.cartItems.push({
          title: list.label,
          itemCount: 1
        })
      }
    },
    // 点击将商品数量加1
    add(state, index) {
      state.cartItems[index].itemCount++;
    },
    // 点击将商品数量减1
    remove(state, index) {
      if (state.cartItems[index].itemCount > 1) {
        state.cartItems[index].itemCount--;
      } else {
        if (window.confirm("是否确认从购物车中移除商品？")) {
          state.cartItems.splice(index, 1);
        }
      }
    },
    // 清空购物车
    clearCart(state) {
      state.cartItems = []
    }
  },
  actions: {},
  modules: {},
  //相当于我们vue 计算属性
  getters: {
    cartSum: state => {
      let sum = 0;
      state.cartItems.forEach(v => {
        sum += v.itemCount;
      })
      return sum;
    }
  }
})

// 监听每次调用mutations的时候，都会进这个方法，然后我们就可以做一下我们想做的事情
store.subscribe((mutations, state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
})
export default store