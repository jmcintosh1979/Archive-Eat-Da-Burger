const orm = require('../config/orm')

var burger = {
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res)
    })
  },

  create: function(burger, value, cb) {
    orm.create('burgers', burger, value, function(res) {
      cb(res)
    })
  },
  update: function(burger, value, cb) {
    orm.create('burgers', burger, value, function(res) {
      cb(res)
    })
  }
}

module.exports = burger