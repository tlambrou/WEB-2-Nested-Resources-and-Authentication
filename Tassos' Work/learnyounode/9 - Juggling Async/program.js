var httpModule = require('http')
var bl = require('bl')

var object = {
  url: "",
  data: "",
  returned: false,
  order: -1
}
var objects = [object, object, object]
var returned = 0

for (var i = 2; i < process.argv.length; i++) {

  objects[i - 2].url = process.argv[i]
  objects[i - 2].order = i - 2
  callback(process.argv[i], i - 2)

}

function callback(url, index) {
  httpModule.get(url, (response) => {
    response.setEncoding('utf8')
    response.pipe(
      bl((err, data) => {
        returned++
        objects[index].data = data.toString('utf8')
        objects[index].returned = true
        objects.forEach((n) => {
          return console.log("Returned Bool: ", n.returned)
        })
        if (objects[0].returned == true && objects[1].returned == true && objects[2].returned == true){
          for (var i = 0; i < objects.length; i++) {
            console.log(objects[i].data)
          }
        }
      }))
    }
  ).on('error', (error) => {
    console.log("Got error: " + error.message)
  })
}
