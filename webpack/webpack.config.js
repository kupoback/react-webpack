const webpack = require("webpack");
const path = require("path");

const config = require("./config");

const assetsFilenames = config.enabled.cacheBusting
  ? config.cacheBusting
  : "[name]";

const webpackConfig = {
  context: config.paths.assets,
  entry: config.entry,
  devtool: config.enabled.sourceMaps ? "#source-map" : undefined,
  output: {
    path: config.paths.dist,
    publicPath: config.publicPath,
    filename: `${assetsFilenames}.js`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = webpackConfig;
