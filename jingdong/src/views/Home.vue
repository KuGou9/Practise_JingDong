<template>
  <div id="index">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
        class="slide"
      >
        <a :href="item.url">
          <img class="banner" :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动分类 -->
    <!-- ref 被用来给DOM元素或子组件注册引用信息。引用信息会根据父组件的 $refs 对象进行注册。如果在普通的DOM元素上使用，引用信息就是元素; 如果用在子组件上，引用信息就是组件实例 -->
    <cube-slide ref="slideList" :data="lists" @change="changePage">
      <cube-slide-item>
        <ul>
          <li v-for="(item, index) in lists" :key="index" class="classify">
            <!-- 如果不在变量前面加:，那就代表是只传入字符串 -->
            <a :href="item.url" class="gundong">
              <img :src="item.image" alt />
            </a>
            <p>{{item.label}}</p>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], //轮播图数组
      lists: [] //滚动分类数组
    };
  },
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  },
  // async用于申明function异步，await用于等待一个异步方法执行完成
  async created() {
    try {
      //获取轮播图数据
      const items = await this.$http.get("/api/banner");
      this.items = items.data;
      // 获取滚动分类数据
      const lists = await this.$http.get("/api/gunDong");
      this.lists = lists.data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style >
.classify {
  float: left;
  width: 20%;
  padding: 10px 0;
  font-size: 18px;
}
.gundong img {
  /* width: 40px; */
  height: 20px;
  border-radius: 5px;
  /* width: 100%; */
}
#index .slide img {
  width: 100%;
}
</style>