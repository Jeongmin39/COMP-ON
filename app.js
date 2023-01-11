const createError = require('http-errors');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const sequelize = require("./models").sequelize;

// get
const indexRouter = require("./routes/index");
const communityRouter = require("./routes/community");
const ourmemoryRouter = require("./routes/ourmemory");
const musteatRouter = require("./routes/musteat");
const projectRouter = require("./routes/project");

// post
const writeRouter = require("./routes/write");


sequelize.sync()
    .then(()=>{
        console.log('db connect');
    })
    .catch((err) =>{
        console.error(err);
        process.exit();
    });


// view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));

// get
app.use('/', indexRouter);
app.use('/community', communityRouter);
app.use('/ourmemory', ourmemoryRouter);
app.use('/musteat', musteatRouter);
app.use('/project', projectRouter);
app.use('/public', express.static('./public/'));

// post
app.use('/write', writeRouter);

// error
app.use((req, res, next) =>{
    next(createError(404));
});

app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    res.render('error');
});

app.listen(9000, ()=>{
    console.log('server connected 9000');
});