const createError = require('http-errors');
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const path = require('path');

const app = express();
const models = require("./models")

// get
const indexRouter = require("./routes/index");
// const communityRouter = require("./routes/community");
// const ourmemoryRouter = require("./routes/ourmemory");
// const musteatRouter = require("./routes/musteat");
const projectRouter = require("./routes/project");

// post
const writeRouter = require("./routes/write");

// // sequelize
// models.sequelize.sync()
//     .then(()=>{
//         console.log('db connect');
//     })
//     .catch((err) =>{
//         console.error(err);
//         process.exit();
//     });


// view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// get
app.use('/', indexRouter);
// app.use('/community', communityRouter);
// app.use('/ourmemory', ourmemoryRouter);
// app.use('/musteat', musteatRouter);
app.use('/project', projectRouter);

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