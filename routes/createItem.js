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
    var title = req.query.title;
    var price = req.query.price;
    var tag = req.query.description;
    //var checkedValue = document.querySelector('.messageCheckbox:checked').value;
    res.render('createItem');
    pg.connect(database, function(err, client, done) {
        if (err) {
            console.error('Could not connect to database');
            console.error(err);
            return;
        }
        console.log("Connected to database");
        client.query("INSERT INTO Listings (Title, Price, Tags) VALUES ('" + title + "','"+price+"','"+tag+"');", function (err, result) {
            done();
            if (err) {
                console.error("Failed to post item");
                console.error(err);
                return;
            }
            console.log(result);
        });
    });
});

var upload = multer({ dest : 'upload/'});
router.post('/*', upload.single('filebrowser'), function(req,res){

    var tmp_path = req.file.path;
    var newfilename = path.basename(tmp_path)+path.extname(req.file.originalname);
    var target_path = './src/assets/img/products/' + newfilename;

    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { res.json({filename:newfilename}); });
    src.on('error', function(err) { res.sendStatus(500); });
})


module.exports = router;