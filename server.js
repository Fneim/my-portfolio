var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("./public"));

require("./routes/api-routes.js");
require("./routes/html-routes.js");

app.listen(PORT, function() {
	console.log("App listening on port " + PORT);
});
