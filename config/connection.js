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
