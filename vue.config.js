const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// https://blog.csdn.net/qq_45334976/article/details/125113481
module.exports = {
  devServer: {
    proxy: {
      "/vue-project": { // 代理接口前缀为/bpi的请求
        "target": 'http://123.60.190.167:8088/', // 对应的代理地址
        "secure": false, // 接受运行在https上，默认不接受
        "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        "pathRewrite": { //重写路径 比如'/apis/aaa/ccc'重写为'/aaa/ccc'
          '^/vue-project': ""
        }
      },
    }
  }
}
