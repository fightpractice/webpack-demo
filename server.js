const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.common.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

app.listen(3001, function(){
    console.log('Example app listening on port 3001!\n');
})