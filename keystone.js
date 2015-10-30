require('dotenv').load()
require('coffee-script/register')

var keystone = require('keystone'),
    webpack = require('webpack'),
    devMiddleware = require('webpack-dev-middleware'),
    hotMiddleware = require('webpack-hot-middleware'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    Html = require('./app/Html')
    config = require('./webpack.config.dev')
    compiler = webpack(config)

keystone.init({
  'name': 'My Project',
  'brand': 'My Project',
  'static': 'public',
  'favicon': 'public/favicon.ico',
  'auto update': true,
  'user model': 'User'
})

keystone.import('models')

keystone.set('nav', {
  'users': 'users'
})

if (process.env.NODE_ENV == 'development') {
  keystone.pre('routes', devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  keystone.pre('routes', hotMiddleware(compiler))
};

keystone.set('routes', function (app) {
  app.all('*', function (req, res) {
    var Base = React.createElement(Html)
    res.status(200).send('<!doctype html>' + ReactDOM.renderToStaticMarkup(Base))
  })
})

keystone.start()
