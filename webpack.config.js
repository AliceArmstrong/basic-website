// const path = require("path");
// const getFilesFromDir = require("./config/files");
// const PAGE_DIR = path.join("src", "pages", path.sep);
//
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const htmlFiles = getFilesFromDir(PAGE_DIR, [".html"]);
//
// const jsFiles = getFilesFromDir(PAGE_DIR, [".js"]);
// const entry = jsFiles.reduce( (obj, filePath) => {
//     const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
//     obj[entryChunkName] = `./${filePath}`;
//     return obj;
// }, {});
//
// const htmlPlugins = htmlFiles.map( filePath => {
//   const fileName = filePath.replace(PAGE_DIR, "");
//   return new HtmlWebPackPlugin({
//     chunks:[fileName.replace(path.extname(fileName), ""), "vendor"],
//     template: filePath,
//     filename: fileName})
// });
//
// module.exports = {
//     entry: entry,
//     // mode: 'production',
//     plugins:[...htmlPlugins],
//     resolve: {
//         alias: {
//             src: path.resolve(__dirname, "src"),
//             components: path.resolve(__dirname, "src", "components")
//         }
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: [
//                       '@babel/preset-env',
//                       '@babel/preset-react'
//                     ]
//                 }
//             }
//         }]
//     },
// };

const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');
const webpack = require('webpack');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  // entry: '/src/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
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
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          // presets: ['@babel/preset-react', 'es2015']
          presets: ['@babel/preset-react']
       }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
