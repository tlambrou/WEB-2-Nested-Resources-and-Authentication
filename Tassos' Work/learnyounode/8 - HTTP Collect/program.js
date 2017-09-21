var httpModule = require('http')
var bl = require('bl')
var concat = require('concat-stream')

const url = process.argv[2]

httpModule.get(url, (response) => {
  response.setEncoding('utf8')
  response.pipe(
    bl((err, data) => {
      console.log(data.length)
      console.log(data.toString('utf8'))
    }))
  }
).on('error', (error) => {
  console.log("Got error: " + error.message)
})
