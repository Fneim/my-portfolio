// global.fetch = require('node-fetch');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/src"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => console.log( `Listening on port ${PORT}`));
