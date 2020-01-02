const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api', {
            //配置接口代理
            target: 'https://api.baxiaobu.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}