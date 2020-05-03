module.exports = {
  configureWebpack: {
    devServer: {
      // Mock接口编写的地方
      // 每一次修改这里的配置的时候，都需要重启项目，否则不生效
      before(app) {
        // app.get("请求地址", (req, res) => {
        //   // 这里的数据是虚假的，只是为了方便前端在还没有拿到后端数据的时候正常开发
        //   res.json({
        //     信息
        //   })
        // })
        // 用户信息池
        let userpool = [{
            username: "xiaoming",
            password: "123456"
          },
          {
            username: "xiaohong",
            password: "456789"
          },
        ] //end userpoor
        // 定义注册接口
        app.get("/api/register", (req, res) => {
          // 定义常量，因为获取到的数据都是不会改变的，属于常量
          const {
            username,
            password
          } = req.query;
          const userLength = userpool.filter(v => v.username == username).length;
          if (userLength > 0) {
            res.json({
              success: false,
              message: "用户名已存在"
            })
          } else {
            res.json({
              success: true,
              message: "注册成功"
            })
          }
        }) //end 注册接口
        // 定义登录接口
        let tokenKey = "JingDong"
        app.get("/api/login", (req, res) => {
          // 定义常量，因为获取到的数据都是不会改变的，属于常量
          const {
            username,
            password
          } = req.query;
          const userLength = userpool.filter(v => v.username == username).length;
          if (userLength > 0) {
            const passLength = userpool.filter(v => v.password == password).length;
            if (passLength > 0) {
              res.json({
                code: 0,
                message: "登陆成功",
                token: tokenKey + "-" + username + "-" + new Date()
              })
            } else {
              res.json({
                code: 1,
                message: "该用户不存在"
              })
            }
          } else {
            res.json({
              code: 2,
              message: "密码错误"
            })
          }
        }) //end 登录接口
        // 定义轮播图接口
        app.get("/api/banner", (req, res) => {
          res.json({
            data: [{
                url: "http://www.didichuxing.com/",
                image: "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png"
              },
              {
                url: "http://www.didichuxing.com/",
                image: "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png"
              },
              {
                url: "http://www.didichuxing.com/",
                image: "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png"
              }
            ]
          })
        }) //end 轮播图接口
        // 定义滚动分类接口
        app.get("/api/gunDong", (req, res) => {
          res.json({
            data: [{
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类1"
              },
              {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类2"
              },
              {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类3"
              },
              {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类4"
              }, {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类5"
              }, {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类6"
              }, {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类7"
              }, {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类8"
              }, {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类9"
              }, {
                url: "https://www.jd.com/",
                image: "//misc.360buyimg.com/lib/img/e/logo-201305-b.png",
                label: "分类10"
              }
            ]
          })
        }) //end 滚动分类接口
        //定义分类接口
        app.get("/api/classify", (req, res) => {
          switch (req.query.type) {
            case '0':
              res.json({
                data: [{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                ]
              });
              break;
            case '1':
              res.json({
                data: [{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
            case '2':
              res.json({
                data: [{
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  }
                ]
              });
              break;
            case '3':
              res.json({
                data: [{
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                ]
              });
              break;
            case '4':
              res.json({
                data: [{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
            case '5':
              res.json({
                data: [{
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                ]
              });
              break;
            case '6':
              res.json({
                data: [{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
          }
        }) // end 分类接口
        // 发现接口
        app.get("/api/faxian", (req, res) => {
          res.json({
            data: [{
                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                label: '小米',
                decribe: "国产手机"
              },
              {
                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                label: '华为',
                decribe: "国产手机"
              },
              {
                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                label: '荣耀',
                decribe: "华为旗下品牌"
              },
              {
                image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                label: '雪梨手机',
                decribe: "手机"
              },
              {
                image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                label: '小米',
                decribe: "国产手机"
              },
              {
                image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                label: '华为',
                decribe: "国产手机"
              },
              {
                image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                label: '荣耀',
                decribe: "华为旗下品牌"
              },
              {
                image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                label: '雪梨手机',
                decribe: "手机"
              },
            ]
          })
        }) // end 发现接口
      }
    }

  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    port: 80,
    open: true
  }
}