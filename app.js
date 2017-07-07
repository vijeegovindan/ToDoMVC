const fs              = require('fs');
const path            = require('path');
const express         = require('express');
const routes          = require("./routes/routes.js");
const bodyParser      = require("body-parser");
const validator       = require("express-validator");
const app             = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})
// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());
// put routes here
app.use(routes);

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/')
});
