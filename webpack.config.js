const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const isDevolopment = process.env.NODE_ENV === 'production';

module.exports ={
    mode : isDevolopment ? 'development' : 'production',
    devtool: isDevolopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions:['.js','.jsx']
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname,'public'),
          },
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        })
    ],
    performance: { 
        hints: false 
    },
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader','sass-loader'],
            }
        ],
    }
};