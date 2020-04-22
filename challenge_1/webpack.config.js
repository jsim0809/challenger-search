module.exports = {
  entry: `${__dirname}/client/index.jsx`,
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  }
};