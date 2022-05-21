var express = require('express')
var path = require('path')
var port = process.env.PORT || 5000

app = express()

app.use(express.static(__dirname + '/dist'))

// app.get('/*', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

app.use('/*', express.static(__dirname + '/dist'))

app.listen(port)