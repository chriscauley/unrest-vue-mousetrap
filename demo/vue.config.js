const path = require("path");

const devServer = {
  host: "mousetrap.localhost",
  port: 8200,
  historyApiFallback: true
};

module.exports = {
  lintOnSave: false,
  devServer,
  configureWebpack: {
    resolve: {
      alias: {
        "@ur/vue-mousetrap": path.resolve(__dirname, "../src/index.js")
      }
    }
  }
};

if (process.env.NODE_ENV === "production") {
  module.exports.publicPath = "/ur-vue-mousetrap";
}
