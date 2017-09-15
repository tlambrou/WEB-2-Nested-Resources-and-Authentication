var fs = require('fs')

var array = []
var result = fs.readFile(process.argv[2], 'utf8', function callback (err, data) {
  if (err) {
    console.error("Whoops there was an error")
  } else {
    console.log(data.split('\n').length - 1)
  }
})
