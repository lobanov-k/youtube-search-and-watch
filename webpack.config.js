const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const pluginsArray = [new webpack.HotModuleReplacementPlugin()];

if (isProduction) pluginsArray.push(new webpack.HotModuleReplacementPlugin());


module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'less-loader'
                }
            ]
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: pluginsArray,
    devServer: {
        contentBase: './dist',
        hot: true
    }
};