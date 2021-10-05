const path = require('path');


const mode = process.env.NODE_ENV || 'development'
const target = mode === 'development' ? 'web' : 'browserslist'

const ROOT_MAIN = path.resolve(__dirname, 'Source/main.js')



module.exports = {


  entry: ROOT_MAIN,

  mode: mode,

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },



  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  target: target,


  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        }
      }
    ],
  },

};
