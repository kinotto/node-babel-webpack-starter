const path = require('path');

module.exports = {
    entry: './src/index.js',
    target: 'node',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    }
}
