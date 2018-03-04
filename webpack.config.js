const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = env => ({
  mode: env.prod ? "production" : "development",
  entry: require("path").resolve(__dirname, "src", "index.ts"),
  output: { filename: "bundle.[chunkhash].js" },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["env"] }
          },
          "ts-loader"
        ]
      },
      {
        test: /.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: { plugins: env.prod ? [
                require("autoprefixer"), require("cssnano")
              ] : [
                require("autoprefixer")
              ]}
            }
          ]
        })
      }
    ]
  },
  optimization: {
    runtimeChunk: env.prod ? true : false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: env.dev ? false : {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin("bundle.[contenthash].css"),
    new CleanWebpackPlugin("dist")
  ]
});