
// the require statement is used to load modules
// fs is the file system module
var fs = require('fs');

// we are using the fs.readFileSync because we want to block the program
// while the the file is being read ...
// lets make that asynchronous ...

fs.readFile('Asynchronous Javascript.html', function (err, result) {
    if (err) console.log('Was not able to read file.', err);
    else {
        console.log(result.toString());
    }
});
