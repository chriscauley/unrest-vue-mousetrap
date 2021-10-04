const path = require('path')

const devServer = {
  host: 'mousetrap.localhost',
  port: 8200,
  historyApiFallback: true,
  allowedHosts: ['all'],
}

module.exports = {
  devServer,
  lintOnSave: false,
  publicPath: '/unrest-vue-mousetrap',
  configureWebpack: {
    resolve: {
      alias: {
        '@unrest/vue-mousetrap': path.resolve(__dirname, '../src/index.js'),
      },
    },
  },
}
