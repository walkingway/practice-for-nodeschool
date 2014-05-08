var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var str = buf.toString();
var count = str.split("\n").length - 1;
console.log(count);