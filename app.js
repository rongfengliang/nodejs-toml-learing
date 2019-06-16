var toml = require('toml');
var concat = require('concat-stream');
var fs = require('fs');
 
fs.createReadStream('tomlFile.toml', 'utf8').pipe(concat(function(data) {
  var parsed = toml.parse(data);
  console.log(JSON.stringify(parsed))
}));