const fs = require('fs')
module.exports = {
   
    configureWebpack: {
        devtool: 'source-map',
    },
    devServer: {
        host: 'ashdevtools.com',
        // disableHostCheck: true,
        port: 8080,
        // hot: true,
        // https: true,
         https: {
          key: fs.readFileSync('/home/ash/aa/localkey.key'),
          cert: fs.readFileSync('/home/ash/aa/local.crt'),
        //   ca: fs.readFileSync('/home/ash/aa/localcerts/server_rootCA.pem'),
        }
    },
}