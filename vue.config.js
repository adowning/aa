const fs = require('fs')
module.exports = {
   
    configureWebpack: {
        devtool: 'source-map',
    },
    devServer: {
        host: 'localhost',
        proxy: 'https://ashdevtools.com',
        disableHostCheck: true,
        //  port: 443,
         hot: true,
         https: true,
         https: {
            key: fs.readFileSync('/etc/ssl/private/cf.key'),
            cert: fs.readFileSync('/etc/ssl/certs/cf.pem'),
        //   ca: fs.readFileSync('/home/ash/aa/localcerts/server_rootCA.pem'),
        }
    },
}