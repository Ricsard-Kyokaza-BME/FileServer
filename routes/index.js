var express = require('express');
var router = express.Router();
var path = require('path');

var multer = require('multer');
var mime = require('mime');
var shortid = require('shortid');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.argv[2])
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '.' + mime.getExtension(file.mimetype));
    }
});
var uploader = multer({ storage: storage });

/* POST Files */
router.post('/', uploader.array('files'), function(req, res, next) {
    var fileNames = [];
    for(var i = 0; i < req.files.length; i++) {
        fileNames.push(req.files[i].filename);
    }

    res.send(fileNames);
});

/* GET File by name */
router.get('/:filename', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../upload', req.params.filename));
});

module.exports = router;
