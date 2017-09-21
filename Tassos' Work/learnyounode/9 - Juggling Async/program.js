var httpModule = require('http')
var bl = require('bl')
var concat = require('concat-stream')

const urlCount = process.argv.length - 2
var urls = []
var results = []
var order = []
var returned = 0

var callback = () => {
  console.log("Length: " + results.length)
  if (returned > 2) {
    for (var j = 0; j < urlCount; j++) {
      console.log(j)

      console.log(order[j], results[order[j]].toString('utf8'))
    }
  }
}

var call = (url, index) => {
  console.log("Before httpModule. | URL: " + url + " | Index: "+ index)
  httpModule.get(url, (response) => {
    console.log("After httpModule. | URL: " + url  + " | Index: "+ index)
    response.setEncoding('utf8')
    response.pipe(
      bl((err, data) => {
        console.log("After bl. | URL: " + url + " | Index: "+ index)
        // Add the order to the order array
        order.push(returned)
        // Add data to the results array
        results.push(data)
        callback()
        // console.log(data.length)
        // console.log(data.toString('utf8'))
      }))
    }).on('error', (error) => {
      console.error("Got error: " + error.message)
    }
  )
}

var series = (callback) => {
  for (var i = 2; i < urlCount + 2; i++) {
    // Grab the given corresponding url
    url = process.argv[i]
    // Add the url to the urls array
    urls.push(url)
    // Make get request
    call(url, returned)
    // Increment the returned count
    returned++
  }
}

series(callback)
