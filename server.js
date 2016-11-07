 var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config = {
    user:'shouham',
    database:'shouham',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool=new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test',function (err,result){
        if (err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result.rows));
        }
    }); 
});
var createTemplate = function (data){
    var heading = data.heading;
    var htmlTemplate =  '<html><head><title>${title}</title><meta name="viewport" content="width=device-width,initial-scale=1"/><link href="/ui/style.css" rel="stylesheet"/></head><body><div class="container"><div><a href="/">Home</a></div><hr/><h3>${heading}</h3><div>${date}</div><div>${content}</div></div></div><script src="angular/angular.min.js"></script></body></html>';
    return htmlTemplate;
}

app.get('/articles',function(req,res){
    //"SELECT * FROM article WHERE title = $1",[req.params.articleName]
    // var articleName=req.params.articleName;
    pool.query("SELECT * FROM article" ,function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else {
            if (result.rows.length === 0){
                res.status(404).send('Article not found');
            } else{
               var data = {title: result.rows[0].title, date: result.rows[0].date, content: result.rows[0].content, heading: result.rows[0].heading}; 
                res.send(createTemplate(data));
            }
        }
    });
    
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
