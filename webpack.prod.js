const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entries = [
    path.join(__dirname, 'src/js/master.js'),
    path.join(__dirname, 'src/less/master.less')
];

module.exports = {
    name: 'Bundling prod',
    mode: 'production',
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/master.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/fonts'
                }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/master.min.css'
        }),
        new CopyWebpackPlugin([
            { from: 'src/*.html', to: path.join(__dirname, 'dist'), flatten: true },
            { from: 'src/data', to: path.join(__dirname, 'dist/data'), flatten: true },
            { from: 'src/images', to: path.join(__dirname, 'dist/images'), flatten: true },
            { from: 'src/images/floatads', to: path.join(__dirname, 'dist/images/floatads'), flatten: true },
            { from: 'sitemap.xml', to: path.join(__dirname, 'dist'), flatten: true }
        ]),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.join(__dirname, 'reports/report_prod_client.html')
})
    ]
};
