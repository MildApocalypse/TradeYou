/**
 * Created by bucklawr on 15/05/16.
 */
var pg=require('pg').native;
var database = "postgres://bahilmyqemykri:iKowEPn0umVbHXossXNsu_abmX@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d6ap3ia4rlhq77";
var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'upload/' })
var fs = require('fs');

router.get('/', function (req,res) {
    res.render('createItem');
});

router.post('/*', multer({ dest : './uploads/'}).single('filename'), function(req,res){

    console.log(req.body);
    console.log(req.file.path);

    var tmp_path = req.file.path;
    var newfilename = path.basename(tmp_path)+path.extname(req.file.originalname);
    var target_path = './images/' + newfilename;

    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { res.json({filename:newfilename}); });
    src.on('error', function(err) { res.sendStatus(500); });
})


module.exports = router;