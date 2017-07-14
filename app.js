const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const route = require("./routes/routes.js")
app.use('/static', express.static('static'));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));


// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/static/index.html");
// })

// put routes here
app.use(route);

// models.todolists.bulkCreate([
//   {
//     title: 'new',
//     completed: false,
//     order: 1
//   },
//   {
//     title: 'new2',
//     completed: false,
//     order: 1
//   },
//   {
//     title: 'new3',
//     completed: false,
//     order: 1
//   }
// ]);

app.listen(8000, function () {
    console.log('Express running on http://localhost:8000/.')
});
