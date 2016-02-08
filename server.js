const path = require('path');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);
const express = require('express');

const app = express();

const options = {
  quiet: false,
  hot: true,
  inline: true,
  historyApiFallback: true,
  lazy: false,
  publicPath: config.output.publicPath,
  stats: true
};

app.use(express.static(__dirname + '/public'));
app.use(require('webpack-dev-middleware')(compiler, options));
app.use(require('webpack-hot-middleware')(compiler));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);

