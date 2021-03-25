const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    assetsDir: "assets",
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                'assets': resolve('src/assets'),
                'css':resolve('src/assets/css'),
                'images':resolve('src/assets/images'),
                'views': resolve('src/views'),
                'components':resolve('src/components'),
                'api':resolve('src/api'),
                'mixins':resolve('src/mixins'),
                'store': resolve('src/store'),
                'service':resolve('src/service'),
            }
        }
    },
    devServer: {
        port: 8081,
        hot:true,
        // open: 'Chrome',
        // proxy: {
        //     '/apiV2': {
        //         target: 'https://silkroad.csdn.net/api/v2',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api/v2': '/'
        //         }
        //     }
        // }
    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             prependData: '@import "~@/style/_variable.scss";'
    //         }
    //     }
    // }
    css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 192
            })
          ]
        }
      }
    },
    productionSourceMap:false,
};
