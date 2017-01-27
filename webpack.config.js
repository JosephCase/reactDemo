var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./config.js');

module.exports = {
    entry: {
        home: './niches/' + config.site_code + '/pages/homepage.js',
        search: './niches/' + config.site_code + '/pages/searchpage.js'
    },
    output: {
        path: 'build',
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/
        }, { //converts SASS into CSS and gives classnames unique hashes to avoid global clashes (see CSS Modules), saves as a seperate CSS file
            test: /\.scss/,
            loader: ExtractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass")
        }],
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};
