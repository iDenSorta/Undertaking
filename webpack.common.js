const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: "./src/index.js",


module: {
    rules: [
        {
            test: /\.html$/,
            use: ["html-loader"]
          },

        {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            type: "asset/resource",
           
        
        },

    ]
}


};