const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
    devServer: {
      static: './',
      port: 3000,
    },
   
  




  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],

  devtool: "eval-source-map",

};

module.exports = merge(common, devConfig);




