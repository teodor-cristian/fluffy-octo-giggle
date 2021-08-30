const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve( __dirname, './src/index.js' ),
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'dist' ),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader'
          },
        ],
      },
}