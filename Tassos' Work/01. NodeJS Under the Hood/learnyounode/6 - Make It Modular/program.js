var fs = require('fs')
var path = require('path')
var tassos = require('./tassos_module')

var result = []
const dirname = process.argv[2]
const extension = process.argv[3]

let callback = (err, data) => {
  if (err) {
    return console.error("Whoops there was an error!\nError: " + err)
  } else {
    result = data.filter((n) => {return (path.extname(n) == '.' + extension)})
    for (var i = 0; i < result.length; i++){
      console.log(result[i])
    }
  }
}

tassos.tassos_module(dirname, extension, callback)
