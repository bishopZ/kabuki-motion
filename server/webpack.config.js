var deepExtend = require('deep-extend');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, "..", "public");
var publicPath = "/";

  /* Note:
   * Entry points for multi page app could be more complex
   * A good example of entry points would be:
   * entry: {
   *   pageA: "./pageA",
   *   pageB: "./pageB",
   *   pageC: "./pageC",
   *   adminPageA: "./adminPageA",
   *   adminPageB: "./adminPageB",
   *   adminPageC: "./adminPageC"
   * }
   *
   * We can then proceed to optimize what are the common chunks
   * plugins: [
   *  new CommonsChunkPlugin("admin-commons.js", ["adminPageA", "adminPageB"]),
   *  new CommonsChunkPlugin("common.js", ["pageA", "pageB", "admin-commons.js"], 2),
   *  new CommonsChunkPlugin("c-commons.js", ["pageC", "adminPageC"]);
   * ]
   */

var commonConfiguration = {

  name: "browser",
  context: path.join(__dirname, "..", "client"),
  entry: {
    application: "main"
  },
  output: {
    // The output directory as absolute path
    path: assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory
    // [name] is replaced by the name of the chunk.
    filename: "[name].js",
    // The output path from the view of the Javascript
    publicPath: publicPath
  },

  module: {
    loaders: [
      { 
        test: /\.js$|\.jsx$/,
        loader: "babel-loader?stage=2", // http://babeljs.io/docs/usage/experimental/
        include: path.join(__dirname, "..",  "client")
      },
      { 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?module&localIdentName=[local]__[hash:base64:5]' +
          '&sourceMap!sass?sourceMap&outputStyle=expanded' +
          '&includePaths[]=' + (path.resolve(__dirname, '../node_modules'))),
      }
      // { test: /\.png$/, loader: "url-loader" },
      // { test: /\.jpg$/, loader: "file-loader" },
      // { test: /\.html$/, loader: "html-loader" },
    ]
  },
  plugins: [
    // extract inline css from modules into a separate css file
    new ExtractTextPlugin("main.css"),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      "client", "node_modules"
    ]
  },
            
};

// The configuration for development
var config = deepExtend(commonConfiguration, {
    devtool: "source-map",
    module: {
      preLoaders: [
        {
          test: /\.js$|\.jsx$/,
          exclude: /node_modules/,
          loaders: ["eslint"]
        }
      ]
    }
});

// // The configuration for production
if (process.env.NODE_ENV == 'production') {
  config = deepExtend(commonConfiguration, {
    name: "server-side rendering",
    target: "node",
    externals: [
      {
        // 'alt/AltContainer': true,
        'react/addons': true
      },
      /^[a-z\-0-9]+$/
    ],
  });
}

module.exports = [config];
