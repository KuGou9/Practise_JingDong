<template>
  <div>
    <!-- 因为这个name后续可能会改变，所以设置为变量 -->
    <!-- transition的效果只会呈现在包裹的元素里面 -->
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>

    <cube-tab-bar
      class="btnbar"
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    ></cube-tab-bar>
    <span class="cartSum">{{cartSum}}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // cartSum: 10,
      transitionName: "slide-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-like"
        },
        {
          label: "发现",
          icon: "cubeic-email"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      cartSum: "cartSum"
    })
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      // label.style.backgroundColor = "#f63";
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      switch (label) {
        case "首页":
          this.$router.replace({ path: "/btnbar/home" });
          // label.style.backgroungColor = "#f63";
          break;
        case "分类":
          this.$router.replace({ path: "/btnbar/classify" });
          break;
        case "发现":
          this.$router.replace({ path: "/btnbar/faxian" });
          break;
        case "购物车":
          this.$router.push({ path: "/btnbar/car" });
          break;
        case "我的":
          this.$router.push({ path: "/btnbar/me" });
          break;
      }
    }
  },
  created() {
    switch (this.$store.path) {
      case "/btnbar/home":
        this.selectedLabelDefault = "首页";
        break;
      case "/btnbar/classify":
        this.selectedLabelDefault = "分类";
        break;
      case "/btnbar/faxian":
        this.selectedLabelDefault = "发现";
        break;
      case "/btnbar/car":
        this.selectedLabelDefault = "购物车";
        break;
      case "/btnbar/me":
        this.selectedLabelDefault = "我的";
        break;
    }
  }
};
</script>

<style >
/* 增加选中率,防止其他页面存在cube-tab-bar发生偏差 */
.cube-tab-bar.btnbar {
  height: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
.cube-tab i {
  font-size: 12px;
}
.cube-tab div {
  display: block;
  font-size: 12px;
  padding-top: 3px;
}
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}
.silde-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.cartSum {
  position: fixed;
  bottom: 30px;
  right: 25%;
  width: 11px;
  height: 11px;
  line-height: 11px;
  font-size: 9px;
  border-radius: 50%;
  color: white;
  background-color: red;
  z-index: 1002;
}
</style>