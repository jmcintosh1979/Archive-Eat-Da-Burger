const express = require('express'),
      router = express.Router("/"),
      burger = require('../models/burger')

  // Create all routes and setup logic for each route where required.

router.get('/', function(req, res) {
  burger.all(
    // cb info for burger.js file
    function(data) {
    var hbsBurger = {
      burgerName: data
    }
    console.log(hbsBurger)
    res.render('index', hbsBurger)
  })
})

router.post('/api/burgers', function(req, res) {
  burger.create(
    // db_col info for burger.js file
    ['burger_name', 'devoured'],
    
    // db_row info for burger.js file
    [req.body.burger_name, req.body.devoured],
    
    // cb info for burger.js file
    function(result) {
    res.json({ id: result.insertId })
  })
})

router.put('/api/burgers/:id', function(req, res) {
  let params1 = 'id = ' + req.params.id
  console.log('Paramater to Update: ' + params1)

  burger.update({
    // keyValue info for burger.js file
    devoured: req.body.devoured},

    // condition info for burger.js file
    params1, 
    
    // cb info for burger.js file
    function(result) {
    if(result.changedRows == 0) {
      return res.status(404).end()
    } else {
      res.status(200).end()
    }
  })
})

module.exports = router