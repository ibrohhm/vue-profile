const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');

const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {
  entry: path.resolve(__src, 'app.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__base, 'dist'),
    clean: true
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
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue - Profile',
      template: path.resolve(__src, 'index.html'),
    }),
    new VueLoaderPlugin()
  ]
}