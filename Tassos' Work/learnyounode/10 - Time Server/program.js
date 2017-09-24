var net = require('net')
var strftime = require('strftime')

var now = new Date()
// var data = `${now.getFullYear()}-0${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
var fmt = "%F %H:%M"
var data = strftime(fmt, now)

function listener(socket) {
  socket.end(data + "\n")
}

var server = net.createServer(listener)
server.listen(process.argv[2])
