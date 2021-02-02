const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    publicPath:'./',
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
        //     '/api': {
        //         target: 'http://localhost:8081',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/mock'
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
    productionSourceMap:false,
};
