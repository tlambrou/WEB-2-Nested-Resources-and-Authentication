var http = require('http')
var url = require('url')
var map = require('through2-map')
var strftime = require('strftime')

function callback(req, res) {

  var path = url.parse(req.url, true)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  if (path.pathname == "/api/parsetime") {

    const time = new Date(path.query['iso'])
    var data = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
    res.end(JSON.stringify(data))

  } else if (path.pathname == "/api/unixtime") {
    const time = new Date(path.query['iso'])
    var data = { unixtime: time.getTime() }
    res.end(JSON.stringify(data))
  } else {
    res.end()
  }
}

var server = http.createServer(callback)
server.listen(process.argv[2])
