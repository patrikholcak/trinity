require('dotenv').load()

var path = require('path'),
    webpack = require('webpack'),
    mixins = require('./app/styles/mixins'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = ['last 2 versions']

module.exports = {
  devtool: 'source-map',
  entry: {
    client: './app/client'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.coffee', '.js', '.css']
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        toplevel: true
      },
      warnings: true,
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.coffee$/,
      loaders: ['transform?envify', 'coffee'],
      include: path.join(__dirname, 'app'),
    }, {
      test: /main\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&importLoaders=1!postcss-loader')
    }]
  },
  postcss: [
    require('postcss-mixins')({
      mixins: mixins
    }),
    require('postcss-nested'),
    require('autoprefixer')({browsers: autoprefixer})
  ]
}
