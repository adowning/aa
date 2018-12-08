const fs = require('fs')
module.exports = {
   
    configureWebpack: {
        devtool: 'source-map',
    },
    devServer: {
         host: 'localhost',
        proxy:{ 
            "/":  {
            target: "https://web.ashdevtools.com",
            secure: true,
            changeOrigin: true 
        },
    },
        disableHostCheck: true,
     port: 8081,
     hot: true,
        //  https: true,
    //     //  https: {
    //     //     key: fs.readFileSync('/home/ash/my-certificates/burp.key'),
    //     //     cert: fs.readFileSync('/home/ash/my-certificates/burp-copy.pem'),
    //     // //   ca: fs.readFileSync('/home/ash/aa/localcerts/server_rootCA.pem'),
    //     // }
    //      https: {
    //         key: fs.readFileSync('/etc/ssl/private/cf.key'),
    //         cert: fs.readFileSync('/etc/ssl/certs/cf.pem'),
    //     //   ca: fs.readFileSync('/home/ash/aa/localcerts/server_rootCA.pem'),
    //     }
     },
}