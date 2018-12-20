const express = require("express");
const app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/api', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ "msg": "hello api" }));
});

app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});
