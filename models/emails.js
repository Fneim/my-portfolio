var Bookshelf = require("./../config/connection.js");

var Email = Bookshelf.Model.extend({
  tableName: 'messages',
  hasTimestamps: true
});

module.exports = Email;
