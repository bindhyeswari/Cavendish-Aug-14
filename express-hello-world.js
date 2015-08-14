

var express = require('express');

// load internal modules
var math = require('./modules/Math'); // path to the js file
console.log(math.sqrt(10));

var contacts_router = require('./modules/contacts'); //


var app = express();



app.use(express.static('/Users/bindhyeswarimishra/WebstormProjects/Cavendish-Aug-14/public'));

app.get('/string', function (req, res) {
    res.status(200).send('Hello World');
});

// pass all requests that are made to the /contacts to the contacts.js file

app.use('/contacts', contacts_router);


app.listen(3000);