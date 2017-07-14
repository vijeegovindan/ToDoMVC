const express = require('express');
const router  = express.Router();
const models = require("../models");

//GET /api/todos/ - return a JSON array of todo items
 router.get('/api/todos/', function(req, res, next) {
   models.todolists.findAll()
     .then(function(todoitem) {
       if (todoitem) {
         res.setHeader('Content-Typeorder', 'application/json');
         res.status(200).json(todoitem);
        }
     }).catch(function(err) {
       res.status(400).send("Bad request. Please try again.");
     });
  });
//POST /api/todos/ - post a JSON representation of a todo and have it saved. Returns the saved todo item in JSON.
router.post('/api/todos/', function(req, res, next) {
    const todoitem = {
    title: req.body.title,
    listorder: req.body.order,
    completed: req.body.completed
    };
      models.todolists.create(todoitem).then(function(todoitem) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(todoitem);
    }).catch(function(err) {
      res.status(400).send("Bad request. Please try again");
  })
});
//GET /api/todos[/id] - get a specific todo item.
router.get('/api/todos/:id', function(req, res) {
  models.todolists.findById(req.params.id)
    .then(function(todoitem) {
      if (todoitem) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(todoitem);
       }
       else {
         res.status(404).send("Todo-list not found")
       }
    }).catch(function(err) {
      res.status(400).send("Bad request. Please try again");
    });
});
//PUT /api/todos[/id] - update a todo item. Returns the modified todo item.
router.put('/api/todos/:id', function(req, res) {
  models.todolists.update({
    title: req.body.title,
    listorder: req.body.order,
    completed: req.body.completed
  }, { where: {
      id: req.params.id
    }
  }).then(function(todoitem) {
    if (todoitem) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(todoitem);
    } else {
      res.status(403).send("Todo-list not found");
    }
  }).catch(function(err) {
    res.status(400).send("Bad request. Please try again");
  });
});
//PATCH /api/todos[/id] - partially update a todo item. Returns the modified todo item.
router.patch('/api/todos/:id', function(req, res) {
  models.todolists.update({
    title: req.body.title,
    listorder: req.body.order,
    completed: req.body.completed
  }, { where: {
      id: req.params.id
    }
  }).then(function(todoitem) {
    if (todoitem) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(todoitem);
    } else {
      res.status(403).send("Todo-list not found");
    }
  }).catch(function(err) {
    res.status(400).send("Bad request. Please try again");
  });
});
//DELETE /api/todos[/id] - deletes a todo item. Returns the todo item that was deleted.
router.delete('/api/todos/:id', function(req, res) {
  models.todolists.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(todoitem) {
    if (todoitem) {
      res.status(200).send("Successfully removed todo-item");
    } else {
      res.status(404).send("Todo list not found");
    }
  }).catch(function(err) {
    res.status(400).send("Bad request. Please try again");
  })
});

module.exports = router;
