const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    app: '../src/server.js'
  },
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};