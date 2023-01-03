const express = require("express");
const router = express.Router();
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views_file');

router.get('/', (req, res) =>{
    res.send('index');
});

module.exports = router;