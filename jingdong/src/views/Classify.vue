<template>
  <div class="scroll-list-wrap">
    <cube-scroll class="left-scroll">
      <ul>
        <!-- key是用于项目优化，当dom加载的时候 -->
        <!-- 当是active的时候class=active，不然为空 -->
        <li
          v-for="(item,index) in items"
          :key="index"
          @click="selectList(index)"
          :class="item.active?'active':''"
        >{{item.label}}</li>
      </ul>
    </cube-scroll>
    <cube-scroll class="right-scroll">
      <ul>
        <li v-for="(list,index) in lists" :key="index">
          <img :src="list.image" alt="列表图片" />
          <p>
            {{list.label}}
            <!-- addToCart($event, list)里面的第二个参数是列表的选中添加的元素 -->
            <i class="cubeic-add" @click="addToCart($event, list)"></i>
          </p>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <!-- 首先添加动画组件，在动画组件里面添加时间，注意不要拼错事件名字 -->
      <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
        <!-- v-if="ball.show"让小球默认不出现 -->
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ball: {
        show: false,
        el: ""
      },
      lists: [],
      items: [
        // active:true是默认选中的意思
        {
          label: "热门推荐",
          active: true
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "家用电器",
          active: false
        },
        {
          label: "家用空调",
          active: false
        },
        {
          label: "电脑产品",
          active: false
        },
        {
          label: "计生情趣",
          active: false
        },
        {
          label: "美妆护肤",
          active: false
        },
        {
          label: "口红",
          active: false
        },
        {
          label: "手袋",
          active: false
        },
        {
          label: "金银财宝",
          active: false
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "手机数码",
          active: false
        }
      ]
    };
  },
  methods: {
    // 点击左侧分类
    selectList(index) {
      this.items.forEach((val, ind) => {
        if (index == ind) {
          val.active = true;
        } else {
          val.active = false;
        }
        this.getClassify(index);
      });
    },
    // 获取右侧分类
    async getClassify(index) {
      const result = await this.$http.get("/api/classify", {
        params: { type: index }
      });
      this.lists = result.data;
    },
    // 点击商品将其添加到购物车里面
    addToCart(e, list) {
      this.$store.commit("addCartItem", list);
      // 让小球显示出来
      this.ball.show = true;
      // 获取点击的元素
      this.ball.el = e.target;
      console.log("e.target", e.target);
    },
    // 添加动画
    beforeEnter(el) {
      // 让小球移动到点击的位置
      // 获取到点击的位置
      const dom = this.ball.el;
      console.log("dom", dom);
      //获取到元素在dom的位置
      const rect = dom.getBoundingClientRect();
      console.log("rect", rect);
      const x = rect.left - window.innerWidth * 0.7;
      const y = -(window.innerHeight - rect.top);
      console.log(x, y);
      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el, done) {
      //触发重绘
      document.body.offsetHeight;
      // 让小球回到原点
      el.style.transform = `translate3d(0,0,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(0,0,0)`;
      // 过度完成之后执行的事件
      el.addEventListener("transitionend", done);
    },
    afterEnter(el) {
      //结束隐藏小球
      this.ball.show = false;
      el.style.display = "none";
    }
  },
  mounted() {
    // 获取到网页高度，减去底部导航条的高度
    const leftScroll = document.querySelector(".left-scroll");
    const rightScroll = document.querySelector(".right-scroll");
    const bodyHeight = document.documentElement.clientHeight;
    leftScroll.style.height = bodyHeight - 66 + "px";
    rightScroll.style.height = bodyHeight - 66 + "px";
  },
  created() {
    this.getClassify(0);
  }
};
</script>

<style>
.scroll-list-wrap {
  display: flex;
}
.left-scroll {
  width: 30%;
  font-size: 14px;
}
.left-scroll .active {
  background-color: white;
  color: #e8864c;
}
.left-scroll li {
  display: block;
  padding: 14px 0;
}
.right-scroll {
  width: 70%;
  font-size: 14px;
}
.right-scroll ul {
  display: flex;
  flex-wrap: wrap;
}
.right-scroll li {
  width: 50%;
  justify-content: center;
  align-items: center;
}
.right-scroll img {
  width: 60px;
  height: 60px;
}
/* 动画效果，配置小球的位置 */
.ball-wrap .ball {
  color: red;
  position: fixed;
  bottom: 10px;
  right: 27%;
  z-index: 1005;
  transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);
}
.ball-wrap .inner {
  width: 20px;
  height: 20px;
  transition: all 1s linear;
}
</style>