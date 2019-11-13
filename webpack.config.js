var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css', '.scss']
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
            test: /\.(s*)css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/,
                use: ['file-loader'],
            }
        ]
    },
    mode:'development',
    devServer: {
        historyApiFallback: true,
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}
