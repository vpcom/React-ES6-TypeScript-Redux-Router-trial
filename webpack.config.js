var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '\\index.js'
};

module.exports = config;