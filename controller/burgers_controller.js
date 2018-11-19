const express = require('express'),
      router = express.Router(),
      burger = require('../models/burger')

router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsBurger = {
      burger: data
    }
    console.log(hbsBurger)
    res.render('index', bhsBurger)
  })
})

router.post('/api/burgers', function(req, res) {
  burger.create([
    'name', 'devour'
  ],
  [req.body.name, req.body.devour
  ], function(result) {
    res.json({ id: result.insertId })
  })
})

router.put('/api/burgers/:id', function(req, res) {
  let params1 = 'id = ' + req.params.id
  console.log('Paramater to Update: ' + params1)

  burger.update({
    devour: req.body.devour
  }, params1, function(restult) {
    if(result.changedRows == 0) {
      return res.status(404).end()
    } else {
      res.status(200).end()
    }
  })
})

module.exports = router