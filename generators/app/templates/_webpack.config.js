var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0'<% if (includeReact) { %>, 'react' <% } %>]
                }
            }
        ]
    },
    devServer: {
        inline: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
