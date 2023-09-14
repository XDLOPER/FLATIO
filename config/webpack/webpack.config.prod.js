const path = require('path');
const webpackMerge = require('webpack-merge');
const WEBPACK_MAIN_CONFIG = require('./webpack.config.main');

let webpack_config_prod = {
     mode: 'production',
     output:{
          path:path.resolve(__dirname,'..','..','dist'),
          filename:'main.[contenthash].js',
          assetModuleFilename:"imaegs/[hash][ext][query]"
     }
}

module.exports = ()=>{
     return webpackMerge.merge(WEBPACK_MAIN_CONFIG,webpack_config_prod);
}