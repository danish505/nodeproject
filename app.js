const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// setting directory
app.set('view engine', 'ejs');
// setting view engine
app.set('views', 'views');

const urlRoute = require('./routes/web.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(urlRoute);


var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Node app listening at http://127.0.0.1", host, port)
 })