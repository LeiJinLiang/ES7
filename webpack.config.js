const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const config = {
    devtool : 'eval-source-map',
    entry : [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/main.js')
    ],
    output : {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : 'src/index.tpl.html',
            inject : 'body',
            filename : 'index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],
    module : {
        rules : [
            {
                test :  /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use :  [
                    {
                        loader : 'babel-loader',
                        options : {
                           presets : ['react', 'es2015','stage-0', 'react-hmre'],
                           plugins : ['transform-async-to-generator'],
                           plugins : ["transform-decorators-legacy"]
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = config