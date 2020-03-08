// const path = require('path');
// const SRC_DIR = path.join(__dirname, '/src');
// const DIST_DIR = path.join(__dirname, '/dist');
// const webpack = require('webpack');
// module.exports = {
//   entry: [
//     // 'webpack-hot-middleware/client',
//     `${SRC_DIR}/index.jsx`
//   ],
//   output: {
//     path: DIST_DIR,
//     filename: 'bundle.js',
//   },
//   watch: true, // on by default
//   devServer: {
//     hot: true,
//     contentBase: path.join(__dirname, 'dist'),
//     publicPath: '/',
//     historyApiFallback: true, // telling dev server if it doesn't recognise something send it down to the client, and let the client worry about the routing. 404s will fall back to /index.html
//     inline: true
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.json', '.css']
//   },
//   module : {
//     rules : [
//       {
//         test: /\.css$/,
//         loader: 'style-loader!css-loader'
//       },
//       {
//         test: /\.png$/,
//         loader: 'url-loader?limit=100000&minetype=image/png'
//       },
//       {
//         test: /\.jpg/,
//         loader: 'file-loader'
//       },
//       {
//         test : /\.jsx?/,
//         include : SRC_DIR,
//         loader : 'babel-loader',
//         query: {
//           // presets: ['@babel/preset-react', 'es2015']
//           presets: ['@babel/preset-react']
//        }
//       }
//     ]
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('production')
//     })
//   ]
// };
// //
// if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production') {
//   config.entry  `${SRC_DIR}/index.jsx`;
//   config.devtool = false;
//   config.plugins = [];
// }

const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&minetype=image/png'
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        loader: 'react-hot-loader/webpack'
      },
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
       }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
