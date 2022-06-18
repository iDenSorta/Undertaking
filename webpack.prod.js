const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
mode: "production",

output: {
    filename:"main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name].[hash][ext]",
    },
    plugins: [new MiniCssExtractPlugin({filename: "name.[contenthash].css"}),
              new CleanWebpackPlugin(),
              new HtmlWebpackPlugin({
                template:"./src/index.html",
                minify:{
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
        
    })],

    module:{
        rules:[
            {
                test: /\.(less|css)$/,
                use: [MiniCssExtractPlugin.loader,
                      "css-loader",
                      "less-loader"]
                },
        ]
    },
    
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ],}
});