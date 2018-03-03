const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: require("path").resolve(__dirname, "src", "index.ts"),
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
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
}