module.exports = {

    //crossorigin: 'anonymous'
    devServer: {

      disableHostCheck: true,
        //proxy: 'http://ubuntu:8081',

      proxy: {
          '/usercenter': {
              target: 'http://localhost:8081',
              changeOrigin: true,
              ws: true
              /*pathRewrite: {
                  '^/usercenter': ''
              }*/
          },

          '/tas': {
              target: 'http://localhost:8082',
              changeOrigin: true,
              ws: true
              /*pathRewrite: {
                  '^/usercenter': ''
              }*/
          },

          '/oauth': {
              target: 'http://localhost:8084',
              changeOrigin: true,
              ws: true
              /*pathRewrite: {
                  '^/usercenter': ''
              }*/
          }

          /*'/api': {
              target: 'http://ubuntu:8081/getuserlist',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api/getuserlist': ''
              }
          }*/
      }

    }

}