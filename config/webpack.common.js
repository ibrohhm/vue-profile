const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');

const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {
    entry: path.resolve(__src, 'app.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__base, 'dist'),
        clean: true,
        publicPath: '/'
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist')
      },
      historyApiFallback: true, // This enables history mode fallback
      port: 8081,
      open: true,
      allowedHosts: "all" // solve the Invalid Host header issue
    },
    performance: {
      hints: false
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                  ],
                },
              },
            },
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
          }
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue - Profile',
            template: path.resolve(__src, 'index.html'),
        }),
        new VueLoaderPlugin(),
        new Dotenv(),
    ],
}