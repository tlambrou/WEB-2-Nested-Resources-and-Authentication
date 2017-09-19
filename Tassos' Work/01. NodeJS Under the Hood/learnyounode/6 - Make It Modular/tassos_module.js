var fs = require('fs')

module.exports.tassos_module = (dirname, extension, callback) => {

  fs.readdir(dirname, (err, data) => {
    if (err) {
      return callback(err)
    } else {
      return callback(null, data)
    }
  })

}
