var http = require('http')
var fs = require('fs')

function callback(request, response) {
  var src = fs.createReadStream(process.argv[3])
  src.pipe(response)
}

var server = http.createServer(callback)
server.listen(process.argv[2])
