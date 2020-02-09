module.exports = {

    //crossorigin: 'anonymous'
    devServer: {

        //proxy: 'http://ubuntu:8081'

      proxy: {
          '/usercenter': {
              target: 'http://ubuntu:8081',
              changeOrigin: true,
              ws: true
              /*pathRewrite: {
                  '^/usercenter': ''
              }*/
          },

          '/tas': {
              target: 'http://ubuntu:8082',
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