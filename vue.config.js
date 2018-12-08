const fs = require('fs')
module.exports = {
   
    configureWebpack: {
        devtool: 'source-map',
    },
    devServer: {
        https: true,
        //  host: 'localhost',
    //     proxy:{ 
    //         "/":  {
    //         target: "https://ashdevtools.com:8080",
    //         secure: true,
    //         changeOrigin: true 
    //     }
    // },
    //     // disableHostCheck: true,
     port: 8081,
     hot: false,
    //     //  https: true,
    //     //       https: {
    //     //     key: fs.readFileSync('./localhost.key'),
    //     //     cert: fs.readFileSync('./localhost.crt'),
    //     // //   ca: fs.readFileSync('/home/ash/aa/localcerts/server_rootCA.pem'),
    //     // }
    //      https: {
    //         key: fs.readFileSync('/etc/ssl/private/cf.key'),
    //         cert: fs.readFileSync('/etc/ssl/certs/cf.pem'),
    //     //   ca: fs.readFileSync('/home/ash/aa/localcerts/server_rootCA.pem'),
    //     }
    },
}