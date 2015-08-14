

var express = require('express');

var app = express();

app.use(express.static('/Users/bindhyeswarimishra/WebstormProjects/Cavendish-Aug-14/public'));

app.get('/string', function (req, res) {
    res.status(200).send('Hello World');
});

app.get('/contacts', function (req, res) {
    res.status(200).json({
        contacts: [{
            name: 'John'
        }, {
            name: 'Carla'
        }]
    });
});

app.listen(3000);