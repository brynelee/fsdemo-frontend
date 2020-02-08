module.exports = {

    //crossorigin: 'anonymous'
    devServer: {

        proxy: 'http://ubuntu:8081'

        /*

      proxy: {
          '/api/login': {
              target: 'http://ubuntu:8081/login',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api/login': ''
              }
          },
          '/api/getuserlist': {
              target: 'http://ubuntu:8081/getuserlist',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api/getuserlist': ''
              }
          }
      }
      */

    }

}