

var router = require('express').Router();

router.get('/', function (req, res, next) {
    console.log('printing from middle ware ... ');
    next();
}, function (req, res) { /// /contacts
    res.status(200).json({
        contacts: [{
            name: 'John'
        }, {
            name: 'Carla'
        }]
    });
});


router.get('/new-contacts', function (req, res) {
    res.send('Implement new contacts search ... ');
});


module.exports = router;