var path = require('path');
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    devtool: 'source-map',
    output: {
        publicPath: "/",
        path: path.join(__dirname, 'src'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]

    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
        inline: true,
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};
