const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
        {
            test: /\.(js|jsx|tsx)$/,
            loader: 'babel-loader',   // 转化js为es5
            exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
            {
                loader: 'style-loader' // 将样式插入到html文件中
            },
            {
                loader: 'css-loader',  // 转化样式文件
                options: {
                    importLoaders: 1
                }
            },
            {
                loader: 'less-loader', // 将less转化为css
                options: {
                  lessOptions: {javascriptEnabled: true}
                }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader' // 将样式插入到html文件中
          },
          {
            loader: 'css-loader',  // 转化样式文件
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader', // 将less转化为css
            options: {

            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: 'file-loader'   // 转化图片字体等
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
    }
    ]
  },
  plugins: [
    //  npm install html-webpack-plugin --save-dev
     new HtmlWebpackPlugin({   // 以固定路经的html文件为模板创建html
        title: 'tristana',
        template: 'public/index.html'    // 路径
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin()
  ],

  // 开启服务器    npm install webpack-dev-server --save-dev
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 3000
}
};