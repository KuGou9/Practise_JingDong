<template>
  <div>
    <img src="//misc.360buyimg.com/lib/img/e/logo-201305-b.png" alt="京东" class="headerImg" />
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
    <a href="http://localhost/#/register">还没注册？点此注册</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          // 用户名设置
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true,
              type: "String",
              min: 3,
              max: 15
            },
            // 什么时候检测？失焦的时候进行检测
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "用户名不能少于三个字",
              max: "用户名不能少于15个字"
            }
          },
          // 密码设置
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入用户名",
              type: "password",
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            // 什么时候检测？失焦的时候进行检测
            trigger: "blur",
            messages: {
              required: "密码不能为空"
            }
          },
          {
            type: "submit",
            label: "登录"
          }
        ] //end field
      } //end date
    };
  },

  methods: {
    async submitHandler(e) {
      // 阻止冒泡
      e.preventDefault();
      try {
        // 为了方便，是把axios挂载到了http上
        const result = await this.$http.get("/api/login", {
          params: this.model
        });
        // 设置了全局拦截器之后代码中的data要删除;
        // if (result.data.code == 0) {
        //   this.$store.commit("setToken", result.data.token);
        //   window.localStorage.setItem("token", result.data.token);
        //   console.log("result", result);
        //   console.log("result.data", result.data);
        // }
        if (result.code == 0) {
          this.$store.commit("setToken", result.token);
          window.localStorage.setItem("token", result.token);
          this.$router.replace({ path: "/btnbar/home" });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
.headerImg {
  width: 30%;
  /* float: left; */
  padding: 10px 0;
}
</style>