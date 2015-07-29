module.exports = {
  entry: ['./app/main.jsx'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      }
    ]
  },
  devtool: 'source-map'
};
