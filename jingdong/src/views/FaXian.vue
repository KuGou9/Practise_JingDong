<template>
  <div class="faxian-list">
    <cube-scroll class="faxian">
      <ul>
        <li v-for="(faxian, index) in faxians" :key="index" class="goods">
          <div class="good">
            <img :src="faxian.image" alt="商品图片" />
            <div class="wenzi">
              <div class="label">{{faxian.label}}</div>
              <div class="dec">{{faxian.decribe}}</div>
            </div>
          </div>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faxians: [
        {
          image:
            "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
          label: "小米",
          decribe: "国产手机"
        },
        {
          image:
            "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
          label: "华为",
          decribe: "国产手机"
        },
        {
          image:
            "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
          label: "荣耀",
          decribe: "华为旗下品牌"
        },
        {
          image:
            "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
          label: "雪梨手机",
          decribe: "手机"
        },
        {
          image:
            "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
          label: "小米",
          decribe: "国产手机"
        },
        {
          image:
            "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
          label: "华为",
          decribe: "国产手机"
        },
        {
          image:
            "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
          label: "荣耀",
          decribe: "华为旗下品牌"
        },
        {
          image:
            "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
          label: "雪梨手机",
          decribe: "手机"
        }
      ]
    };
  },
  methods: {
    async getFaXian() {
      const result = await this.$http.get("/api/faxian");
      this.faxians = result.data;
    }
  },
  mounted() {
    // 获取到网页高度，减去底部导航条的高度
    const faxian = document.querySelector(".faxian");
    const bodyHeight = document.documentElement.clientHeight;
    faxian.style.height = bodyHeight - 66 + "px";
    console.log("height", bodyHeight - 66 + "px");
  }
};
</script>

<style >
.faxian-list {
  width: 100%;
}
.good {
  border-bottom: 1px solid #eee;
}
.goods .good {
  float: left;
  width: 100%;
  text-align: left;
}
.good img {
  height: 80px;
  float: left;
}
.good .wenzi {
  width: 70%;
  float: left;
  font-size: 13px;
}
.label,
.dec {
  margin-top: 15px;
}
</style>