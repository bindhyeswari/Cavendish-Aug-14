
var router = require('express').Router();
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});

router.post('/upload', upload.array('info', 5), function (req, res) {
    console.log(req.files.length);
    res.status(500).send('IMPL_101');
});

module.exports = router;