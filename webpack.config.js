//var webpack = require('webpack');
//var path = require('path');
//
//var BUILD_DIR = path.resolve(__dirname, 'client/public/');
//var APP_DIR = path.resolve(__dirname, 'client');
//
//var config = {
//  entry: [
//    APP_DIR + '/index.js'
//  ],
//  output: {
//    path: BUILD_DIR,
//    filename: 'bundle.js'
//  },
//  debug: true,
//  module: {
//    loaders: [
//     {
//       test: /\.js$/,
//       loader: 'babel-loader',
//       include: path.join(__dirname, 'client'),
//       query: {
//         presets: ['es2015', 'stage-1', 'react']
//       }
//     },
//     {
//       test: /\.css?$/,
//       include: path.join(__dirname, 'client'),
//       loaders: ['css']
//     }
//   ]
// }
//};
//
//module.exports = config;
