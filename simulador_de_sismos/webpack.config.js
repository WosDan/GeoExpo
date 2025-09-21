const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const rulesForJs = {
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
const rules = [rulesForJs]

module.exports = {
  entry: './src/index.js',  // Punto de entrada principal
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida
    clean: true  // Limpia dist antes de cada build
  },
  devServer: {
    hot: true,
    port: 8080,
    open: true,
    client: {
      overlay: true
    },
    static: {
      directory: path.resolve(__dirname, 'dist')  // Sirve archivos de dist
    }
    
  },
  module:{
  rules: rules
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
};
