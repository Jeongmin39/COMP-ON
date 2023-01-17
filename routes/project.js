const express = require("express");
const router = express.Router();
const app = express();
const db = require('../models');
const Project = db.Project;
const bodyParser = require('body-parser');

const fs = require("fs");
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
});
connection.connect();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));

router.get(['/','/:year'], (req, res) =>{
    var year = req.params.year;
    if(!year){
        connection.query("SELECT year, site, git FROM comp_on.write", (err, rows, fields) =>{
            res.render('project', {year: 'all project', data: rows});
        });
    } else{
        connection.query(`SELECT year, site, git FROM comp_on.write WHERE year=${year}`, (err, rows, fields) =>{
            res.render('project', {year: year, data: rows})
        })
    }
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