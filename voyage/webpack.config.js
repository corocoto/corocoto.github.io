const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist/js'),
        publicPath: '/dist/js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                }
            ]
        }]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/main.css',
        })
    ],
};
