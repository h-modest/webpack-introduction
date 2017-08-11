var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build", //打包后的文件存放地方
    filename: "bundle.js" //打包后输出文件的文件名
  },

  module: { //在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, //排除node_modules之外的文件
        loader: "babel-loader", //在webpack的module部分的loaders里进行配置即可
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules' //添加对样式表的处理
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer') //调用autoprefixer插件
        ],

        //webpack提供构建本地服务器
        devServer: {
          // contentBase: "./public", //本地服务器所加载的页面所在的目录
          colors: true, //终端中输出结果为彩色
          historyApiFallback: true, //不跳转
          inline: true, //实时刷新
          port: 9000, //监听端口
          hot: true
        }
      }
    }),
    new webpack.BannerPlugin("Copyright Flying Unicorns inc."),//在这个数组中new一个就可以了
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html" //new 一个这样插件的例子，并传入相应的参数
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ]
}
