var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack/hot/only-dev-server',
        // path.resolve(__dirname, './app/index.js'),
        "./index.js"
    ],
    output: {
        path: BUILD_PATH,
        // path: path.resolve(__dirname, './build'),
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }, {
                test: /\.(scss|css)$/,
                // exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
                //include: APP_PATH
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=40000'
            }, {
                test: /\.json$/,
                loader: "json-loader"
            }, {
            test: /\.svg/, loader: 'svg-sprite-loader',

            },
        ]
    },
    resolve: {
        extensions: ['.web.js', '.js', '.json'],
    },
    devServer: {
        hot: true,
        inline: true, 
        host:'171.168.1.44',
        // host:'localhost',
        port: 8415
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({ //����ģ�����css/js����������HTML
            filename: 'index.html', //���ɵ�html���·��������� path
            template: 'index.html', //htmlģ��·��
            inject: 'body',
            hash: true,
        }),
        new webpack.DefinePlugin({//production生产环境development开发环境
			"process.env": { 
				NODE_ENV: JSON.stringify("production")
			}
		})
    ],
    externals: {
        'BMap': 'BMap'
    },
};