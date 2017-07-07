const express = require('express');
const router  = express.Router();
const models = require("../models");

// router.get('/', function(req, res) {
//   res.redirect('/api');
// });

router.post('/api/todos/', function(req, res) {
  console.log("REQ-NEWTO--", req.body.newtodo);
    models.todolist.create({
      newToDo: ""
    }).then(function(todo) {
      if (todo) {
        console.log("TODO--", newToDo);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(todo);
      }
    }).catch(function(err) {
      res.status(400).send("Bad request. Please try again.");
    })
});

module.exports = router;
