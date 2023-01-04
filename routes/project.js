const express = require("express");
const router = express.Router();
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

router.use('/', (req, res) =>{
    res.send('project page');
})

module.exports = router;