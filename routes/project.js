const express = require("express");
const router = express.Router();
const app = express();
const db = require('../models');
const Project = db.Project;
const bodyParser = require('body-parser');



app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));

router.get(['/','/:year'], (req, res) =>{
    var year = req.params.year;
    res.render('project' ,{year: year});
});

router.post(['/', '/:year'], (req, res, next) =>{
    var year = Number(req.body.year);
    var site = String(req.body.site);
    var git = String(req.body.git);

    Project.create({
        year: year,
        site: site,
        git: git,
    }).catch(err =>{
        console.log(err);
    });

    res.redirect('/');
});

module.exports = router;