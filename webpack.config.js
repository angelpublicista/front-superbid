const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    resolve: {
        extensions: ['.js']
    },

    entry: './src/app.js',
    output: {
        filename: 'js/bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devServer: {
        contentBase: "dist",
        compress: true,
        port: 8000
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'gracias.html',
            template: './src/gracias.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'error.html',
            template: './src/error.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'politicas-de-privacidad.html',
            template: './src/politicas-de-privacidad.handlebars',
            minify: false
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name]-styles.css'
        }),

        
    ],


    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },

            { test: /\.handlebars/, loader: "handlebars-loader" },

            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options:{
                    outputPath: 'fonts'
                }
            },

            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        },
                    },
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static'
                        }
                    }
                ]
            },

            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75
                    }
                }
            }
        ]
    }
}