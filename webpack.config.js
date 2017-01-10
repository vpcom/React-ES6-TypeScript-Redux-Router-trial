var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var entry_point = 'index.js';
var entry_path = path.join(APP_DIR, entry_point); // Cross platform path

var config = {
    entry: entry_path,
    module: {
        loaders: [
            /* ts-loader runs before babel-loader
            { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
    */
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }
};

module.exports = config;