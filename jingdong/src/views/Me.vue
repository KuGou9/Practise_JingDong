<template>
  <div>
    <div class="header">
      <img src="//misc.360buyimg.com/lib/img/e/logo-201305-b.png" alt="京东" class="logo" />
      <div class="title">我的京东</div>
    </div>
    <div>
      <ul>
        <li
          class="chooce"
          v-for="chooce in chooces"
          :key="chooce.label"
          @click="chooceClick(chooce)"
        >
          <span>{{chooce.label}}</span>
          <i class="cubeic-arrow"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chooces: [
        { label: "商品收藏" },
        { label: "我的足迹" },
        { label: "店铺收藏" },
        { label: "我的订单" },
        { label: "退出", type: "exit" }
      ]
    };
  },
  methods: {
    // 选项点击事件
    chooceClick(chooce) {
      if (chooce.type == "exit") {
        this.$store.commit("setToken", "");
        localStorage.removeItem("token");
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>

<style >
.header {
  width: 100%;
  height: 60px;
  border: 1px solid red;
  display: flex;
  padding-bottom: 5px;
}
.logo {
  border: 1px solid blue;
}
.title {
  font-size: 16px;
  border: 1px solid yellow;
  margin-top: 35px;
  margin-left: 5px;
}
.chooce {
  height: 30px;
  font-size: 16px;
  padding-top: 10px;
  padding-left: 3%;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.chooce i {
  float: right;
  margin-right: 3%;
}
</style>