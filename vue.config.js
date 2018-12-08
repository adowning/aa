const fs = require('fs')
module.exports = {
   
    configureWebpack: {
        devtool: 'source-map',
    },
    devServer: {
        host: '0.0.0.0',
        changeOrigin: true,
        proxy: 'https://localhost.com:8080',
        // disableHostCheck: true,
         port: 8080,
         hot: false,
         https: true,
              https: {
            key: fs.readFileSync('./localhost.key'),
            cert: fs.readFileSync('./localhost.crt'),
        //   ca: fs.readFileSync('/home/ash/aa/localcerts/server_rootCA.pem'),
        }
        //  https: {
        //     key: fs.readFileSync('/etc/ssl/private/cf.key'),
        //     cert: fs.readFileSync('/etc/ssl/certs/cf.pem'),
        // //   ca: fs.readFileSync('/home/ash/aa/localcerts/server_rootCA.pem'),
        // }
    },
}