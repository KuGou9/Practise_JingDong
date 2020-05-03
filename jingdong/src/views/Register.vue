<template>
  <div>
    <img class="headerImg" src="//misc.360buyimg.com/lib/img/e/logo-201305-b.png" alt="京东" />
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
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
            label: "注册"
          }
        ] //end field
      } //end date
    };
  },

  methods: {
    submitHandler(e) {
      // 阻止冒泡
      e.preventDefault();
      this.$http
        .get("/api/register", { params: this.model })
        .then(res => {
          console.log(res.data.success);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.headerImg {
  width: 50%;
  /* height: 100px; */
}
</style>