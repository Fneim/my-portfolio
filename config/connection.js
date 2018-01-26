// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'',
//   database: 'Email'
// });
//
// connection.connect(function(err) {
//   if(err) {
//     console.log("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
//
// module.exports = connection;

//utilizing the bookshelf and knex library
//to create a connection to the db
var knex =  require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'email',
    charset: 'utf8'
  }
});

var Bookshelf = require('bookshelf')(knex);
module.exports = Bookshelf;
