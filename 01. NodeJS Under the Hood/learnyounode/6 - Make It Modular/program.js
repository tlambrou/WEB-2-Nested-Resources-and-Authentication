var fs = require('fs')
var path = require('path')

var result = []
fs.readdir(process.argv[2], function callback (err, list) {
  if (err) {
    console.error("Whoops there was an error" + err)
  } else {
    result = list.filter((n) => {return (path.extname(n) == '.' + process.argv[3])})
    for (var i = 0; i < result.length; i++){
      console.log(result[i])
    }
  }
})
