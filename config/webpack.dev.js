// const webpack = require('webpack')
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // 将模式设置为 development 或 production
  mode: "development",

  // 控制源映射的生成方式
  devtool: "source-map",

  // 启用：可以在 IE 11 中进行测试，但是由于 webpack 5 中的错误，重新加载/替换会中断！
  // 禁用：可以使用热更新/替换，但不能使用 IE 11！
  // target: ['web', 'es5'],

  // 启动服务器以进行快速开发
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    // 仅更新热重载时更改的内容, 新版本不需要下面插件
    // new webpack.HotModuleReplacementPlugin(),
  ],
});
