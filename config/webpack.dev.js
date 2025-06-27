const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const __base = path.resolve(__dirname, '..');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: {
            verbose: true
        },
        hot: true,
    }
})