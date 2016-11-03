var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/shouham.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shouham.jpg'));
});

app.get('/ui/home-6.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home-6.gif'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

// $(document).ready(function(){
// 	/* This code is executed after the DOM has been completely loaded */

// 	$('nav a,footer a.up').click(function(e){

// 		// If a link has been clicked, scroll the page to the link's hash target:

// 		$.scrollTo( this.hash || 0, 1500);
// 		e.preventDefault();
// 	});

// });
