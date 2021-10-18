const path = require('path');


const mode = process.env.NODE_ENV || 'development'
const target = mode === 'development' ? 'web' : 'browserslist'




module.exports = {
  entry: path.resolve(__dirname, 'Source/main.tsx'),

  mode: mode,

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

//   externals: {
//     react: 'React',
//     'react-dom': 'ReactDOM'
//   },

  target: target,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        }
      }
    ]
  }
};
