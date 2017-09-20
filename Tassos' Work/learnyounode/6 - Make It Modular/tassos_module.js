var fs = require('fs')
var path = require('path')

var result = []
module.exports = (dirname, extension, callback) => {

  fs.readdir(dirname, (err, data) => {
    if (err) {
      return callback(err)
    } else {
      result = data.filter((n) => {
        return (path.extname(n) == '.' + extension)
      })
      callback(null, result)
    }
  })
  return result

}
