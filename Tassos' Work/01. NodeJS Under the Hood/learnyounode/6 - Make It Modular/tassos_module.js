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

      // console.log("the array is: " +typeof dataArr + " ....." + dataArr)
      callback(null, result)

    }
  })

  // for (var i = 0; i < thing.length; i++){
  //   console.log(thing[i])
  // }

  // console.log("This is the thing:", thing)
  return result

}
