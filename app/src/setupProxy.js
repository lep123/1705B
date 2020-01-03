const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {
<<<<<<< HEAD
            target: 'http://api.baxiaobu.com',

=======
            target: 'http://api.baxiaobu.com/',
>>>>>>> 6c85d8a2c04b79d46b9c8a6d158d2e286159180a
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }),
        proxy('/xxx', {
            target: 'https://blogs.zdldove.top/',
            changeOrigin: true,
            pathRewrite: {
                '^/xxx': ''
            }
        })
    )
}