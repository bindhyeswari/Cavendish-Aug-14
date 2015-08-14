
// the require statement is used to load modules
// fs is the file system module
var fs = require('fs');

// we are using the fs.readFileSync because we want to block the program
// while the the file is being read ...
// lets make that asynchronous ...
var file_str = fs.readFileSync('Asynchronous Javascript.html').toString();

console.log(file_str);