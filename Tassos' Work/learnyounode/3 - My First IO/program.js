var fs = require('fs')

var result = fs.readFileSync(process.argv[2]).toString().split('\n')

console.log(result.length - 1)
