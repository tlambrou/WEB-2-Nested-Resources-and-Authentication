var httpModule = require('http')

const url = process.argv[2]

httpModule.get(url, (response) => {
  response.setEncoding('utf8')
  response.on('data', (data) => {
    console.log(data)
  })
}).on('error', (error) => {
  console.log("Got error: " + error.message)
})
