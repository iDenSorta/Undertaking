const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common ,{
mode:'development',

devtool: 'source-map',
plugins: [
    new HtmlWebpackPlugin({
        template:"./src/index.html"
})],

  
output: {
    filename:"main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name][ext]",
    },

    module:{
        rules:[
            {
                test: /\.(less)$/,
                use: ["style-loader","css-loader","less-loader"]
                },

                {
                    test: /\.(css)$/,
                    use: ["style-loader","css-loader","less-loader"]
                    },
        ]
    }
  

});