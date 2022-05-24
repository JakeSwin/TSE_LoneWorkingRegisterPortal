var express = require('express')
var { createProxyMiddleware } = require('http-proxy-middleware')
var path = require('path')
var port = process.env.PORT || 5000

app = express()

app.use(express.static(__dirname + '/dist'))

// app.get('/*', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

app.use('/backend', createProxyMiddleware({
    target: "https://cryptic-stream-90225.herokuapp.com",
    changeOrigin: true,
    secure: false
}))

app.use('/*', express.static(__dirname + '/dist'))

app.listen(port)