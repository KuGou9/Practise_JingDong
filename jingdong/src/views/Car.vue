<template>
  <div>
    <div class="goods" v-for="(cartItem,index) in cartItems" :key="index">
      {{cartItem.title}}
      <div class="goodsRight">
        <i class="cubeic-add" @click="add(index)"></i>
        <span>{{cartItem.itemCount}}</span>
        <i class="cubeic-remove" @click="remove(index)"></i>
      </div>
    </div>
    <cube-button style="margin:10px 0">下单</cube-button>
    <cube-button @click="clearCart()">清空购物车</cube-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // cartItems: []
    };
  },
  computed: {
    ...mapState({
      cartItems: state => state.cartItems
    })
  },
  methods: {
    add(index) {
      this.$store.commit("add", index);
    },
    remove(index) {
      this.$store.commit("remove", index);
    },
    clearCart() {
      this.$store.commit("clearCart");
    }
  }
};
</script>

<style>
.goods {
  text-align: left;
  font-size: 18px;
  margin-top: 10px;
}
.goodsRight {
  float: right;
  font-size: 18px;
}
.cart {
  font-size: 16px;
}
</style>