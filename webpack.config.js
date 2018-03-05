const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = env => {
  const dev = env.dev ? true : false;
  const prod = env.prod ? true : false;
  return {
    entry: require("path").resolve(__dirname, "src", "index.ts"),
    output: { filename: "bundle.[chunkhash].js" },

    mode: env.prod ? "production" : "development",
    devtool: env.dev ? "inline-source-map" : undefined,
    resolve: { extensions: [".js", ".ts"] },

    module: {
      rules: [
        {
          test: /.ts$/,
          use: [
            {
              loader: "babel-loader",
              options: { presets: ["env"], sourceMaps: dev }
            },
            "ts-loader"
          ]
        },
        {
          test: /.css$/,
          use: ExtractTextPlugin.extract({
            fallback: { loader: "style-loader", options: { sourceMap: dev }},
            use: [
              { loader: "css-loader", options: { sourceMap: dev }},
              {
                loader: "postcss-loader",
                options: {
                  plugins: env.prod ? [
                    require("autoprefixer"), require("cssnano")
                  ] : [
                    require("autoprefixer")
                  ],
                  sourceMap: dev
                }
              }
            ]
          })
        }
      ]
    },
    optimization: {
      runtimeChunk: prod
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
  };
};