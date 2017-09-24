var http = require('http')
var map = require('through2-map')

function callback(request, response) {

  request.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(response)

}

var server = http.createServer(callback)
server.listen(process.argv[2])
