const path =require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    copyWebpackPlugin  = require('copy-webpack-plugin'),
    ImageminPlugin = require('imagemin-webpack-plugin').default,
    pngquant=require('imagemin-pngquant'),
    mozjpeg=require('imagemin-mozjpeg');

const Paths ={
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};

module.exports={
    externals: {
        paths: Paths
    },
    entry: {
        app: `${Paths.src}/js/index.js`
    },
    output: {
        filename: 'main.js',
        path: `${Paths.dist}/js/`,
        publicPath: '/dist/js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.(png|jpg|svg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },{
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {path: `${Paths.src}/js/postcss.config.js`}
                    }
                },
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
        new copyWebpackPlugin([
            {
                from: `${Paths.src}/img`,
                to: `${Paths.dist}/img`
            },
            {
                from: `${Paths.src}/video`,
                to: `${Paths.dist}/video`
            }
        ]),
        new ImageminPlugin({
                interlaced: true,
                progressive: true,
                svgPlugins: [{removeViewBox: false}],
                une: [pngquant()],
            plugins: [mozjpeg({quality: 50})]
        }),
    ]
};
