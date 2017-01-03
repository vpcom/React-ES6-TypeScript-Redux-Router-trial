var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '\\index.tsx',
    module: {
        loaders: [
            // ts-loader runs before babel-loader
            { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
        ]
    }
};

module.exports = config;