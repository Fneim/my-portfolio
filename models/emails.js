var Bookshelf = require("./../config/connection.js");

var Email = Bookshelf.Model.extend({
  tableName: 'messages'
});

module.exports = Bookshelf.model('Email', Email);
