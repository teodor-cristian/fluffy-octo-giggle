const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve( __dirname, './src/index.js' ),
    output: {
        filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      static: path.join(__dirname, './src'),
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