const express = require("express");
const router = express.Router();
const app = express();

app.set('view engine', 'pug');


router.get('/', (req, res) =>{
    res.render('index');
});

module.exports = router;