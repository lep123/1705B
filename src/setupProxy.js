const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        proxy('/app', {
            target: 'https://blogs.zdldove.top',
            changeOrigin: true,
            pathRewrite: {
                '^/app': ''
            }
        })
    )

    app.use(
        proxy('/api', {
            target: 'http://api.baxiaobu.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )



}