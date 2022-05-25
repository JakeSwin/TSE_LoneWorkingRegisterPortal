var express = require('express')
var { createProxyMiddleware } = require('http-proxy-middleware')
var path = require('path')
var port = process.env.PORT || 5000

app = express()

// Express will serve static files located in /dist after npm build has run
app.use(express.static(__dirname + '/dist'))

// Api proxy for backend server
app.use('/api', createProxyMiddleware({
    target: "https://cryptic-stream-90225.herokuapp.com",
    changeOrigin: true,
    secure: false
}))

app.use('/*', express.static(__dirname + '/dist'))

app.listen(port)