var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
    'article1':{
        title: 'Article one',
    heading: 'Article one',
    date: '10 may 2018',
    content: `   
            <p> This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.
            </p>
            <p> This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.
            </p>
            <p> This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.This is the ontent of article 1.
            </p> `
        
    },
    'article2': {
                title: 'Article two',
                heading: 'Article two',
                date: '10 may 2018',
                content:  `<p> This is the ontent of article 2 </p>`
            },  
    'article3': {
        title: 'Article three',
        heading: 'Article three',
        date: '10 may 2018',
        content: 
            `<p> This is the ontent of article 3</p> `
        
    },
    
};

function createtemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplate= `
    <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device-width , initial-scale=1" /> 
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <a href='/'> Home</a>
        <div class="container">
        <div>
            <h1>
               ${heading}
            </h1>
            
        </div>
        <hr/>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`
;
return(htmltemplate);
}

app.get('/:articlename',function(req,res)

{
    var articlename=req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});
app.get('/article2',function(req,res)
{
        res.sendFile(path.join(__dirname, 'ui', 'article2.html'));

});
app.get('/article3',function(req,res)
{
       res.sendFile(path.join(__dirname, 'ui', 'article3.html'));

});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
