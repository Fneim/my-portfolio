var Email = require("./../models/emails.js");

module.exports = function(app) {

  //send messages to the database
  app.post("/api/email", function(req, res) {

    new Email({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      message: req.body.message
    })
    .save()
    .then(function(messages) {
    });
  });
}
