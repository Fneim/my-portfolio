var db = require("");

module.exports = function(app) {
  //send messages

  app.post("/api/email", function(req, res) {
    //recieve user input from url
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var message = req.body.message;

    db.Email.create({
      fName: firstName,
      lName: lastName,
      email: message
    }).then(function(res) {
      //results are avaible to us inside .then
      return res.json(res);
      console.log(res);
    });
  });
}
