var fs          = require('fs')
const simdjson  = require('simdjson');

const jsonString = fs.readFileSync( "./tweets.json" , 'utf8');
// console.log(jsonString)
// // const valid      = simdjson.isValid( jsonString )

// lazy parse 返回的并非 object
// const JSONbuffer = simdjson.lazyParse(jsonString); 
// console.log(JSONbuffer.valueForKeyPath("images[2]"));z

console.time("node native json")
for ( let i = 0 ; i < 1000; i++ ){
    var parsedJSON = JSON.parse(jsonString); 
}
console.timeEnd("node native json")

console.time("simdjson")
for ( let i = 0 ; i < 1000; i++ ){
    var parsedJSON = simdjson.parse(jsonString); 
}
console.timeEnd("simdjson")