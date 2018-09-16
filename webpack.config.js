const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, { mode }) => ({
  devtool: 'cheap-module-source-map',
  output: {
    filename: `[name].${mode === 'production' ? '[contenthash]' : ''}.js`
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    alias: {
      '@material-ui/core': '@material-ui/core/es'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
})
