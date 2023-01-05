const express = require("express");
const router = express.Router();
const app = express();

app.set('view engine', 'pug');


router.get('/', (req, res) =>{
    res.render('community');
});

module.exports = router;