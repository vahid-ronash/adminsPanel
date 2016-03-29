var webpack = require("webpack");
var config = {
    context:__dirname,
    entry: {
        app: ['./app/main.js']
    },
    output: {
        path:     __dirname + '/build/',
        filename: 'bundledApp.js',
    },
    resolve: {
        alias: {
            LIBjquery: "jquery/dist/jquery.js",
            LIBbootstrap: "bootstrap/dist/js/bootstrap.js",
            LIBtether: "tether/dist/js/tether.min.js",
            LIBangular: "angular/angular.js",
        },
        root: __dirname,
        modulesDirectories: ["node_modules", "assets/libs","app","assets"]
    },
    module: {
        noParse: [],
        loaders: [
            // { test: /\.js$/, exclude: /node_modules/,
            //     loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"]},

            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
            // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
            // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    // plugins: [
        // new webpack.ProvidePlugin({
        //     $: "LIBjquery",
        //     jQuery: "LIBjquery"
        // }),
        // new webpack.ProvidePlugin({
        //     angular: "LIBangular"
        // })
    // ]
};

module.exports = config;