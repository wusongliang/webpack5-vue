const pathtoresolve = require("path");
const paths = require("./paths");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: [paths.src + "/main.js"],
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      components: pathtoresolve.resolve(__dirname, "../src/components/"),
      assets: pathtoresolve.resolve(__dirname, "../src/assets/"),
      page: pathtoresolve.resolve(__dirname, "../src/page/"),
    },
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },

      // JavaScript: 使用 Babel 转译 JavaScript 文件
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3, // polyfill
                },
              ],
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
              // 将 ES2015 箭头函数编译为 ES5
              "@babel/plugin-transform-arrow-functions",
              // 对象解构 ES2018
              "@babel/plugin-proposal-object-rest-spread",
              // 将异步函数转换为 ES2015 生成器
              "@babel/plugin-transform-async-to-generator",
            ],
          },
        },
      },

      // Styles: 使用源映射将 CSS 注入头部
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "vue-style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },

      // Images: 将图像文件复制到构建文件夹
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // 字体和 SVG：内联文件
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),

    // 重建时删除/清理构建文件夹和未使用的资产
    new CleanWebpackPlugin(),

    // html 模板
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      favicon: paths.public + "/favicon.ico",
      template: pathtoresolve.resolve(__dirname, "../") + "/index.html",
      filename: "index.html",
    }),
  ],
};
