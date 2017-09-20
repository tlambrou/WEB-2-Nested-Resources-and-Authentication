var fs = require('fs')
var tassos = require('./tassos_module')

const dirname = process.argv[2]
const extension = process.argv[3]

let callback = (err, data) => {
  if (err) {
    return console.error("Whoops there was an error!\nError: " + err)
  } else {
    data.forEach((n) => {
      console.log(n)
    })
  }
}

tassos(dirname, extension, callback)
