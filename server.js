var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/resume.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'resume.html'));
});

app.get('/ui/blogsubmit.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogsubmit.html'));
});

app.get('/ui/blogview.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogview.html'));
});

app.get('/ui/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/ui/port.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'port.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/styler.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styler.css'));
});

app.get('/ui/stylem.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stylem.css'));
});

app.get('/ui/style1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style1.css'));
});

app.get('/ui/shouham.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shouham.jpg'));
});

app.get('/ui/me.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.jpg'));
});

app.get('/ui/insta.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'insta.png'));
});

app.get('/ui/fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb.png'));
});

app.get('/ui/snapchat.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'snapchat.jpg'));
});

app.get('/ui/logo2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo2.png'));
});

app.get('/ui/logo3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo3.png'));
});


app.get('/ui/home-6.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home-6.gif'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

