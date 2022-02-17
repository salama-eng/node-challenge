
const http = require('http');
const fs = require('fs');


const file = (fileName) => fs.createReadStream(fileName, 'utf-8');

const express=require("express");

const app=express();
app.set('view engine','ejs');
app.set('views','view');
app.listen("3001");
app.use('/',express.static('view/css'));
app.use('/images',express.static('view/images'));
app.use('/',express.static('view/js'));
app.use('/fontawesome',express.static('view/js/fontawesome'));
app.get("/",(req,res)=>{
res.render("index");
res.end();
});


app.get('/about', (req, res)=> {
  res.render('about');
});

app.get('/contact', (req, res)=> {
  res.render('contact');
});

http.createServer((req, res) => {
    if (req.url.startsWith('/admin')) {
      if (req.url === '/admin') {
        file('admin.html').pipe(res);
      } else{
        file('login.html').pipe(res);
      }
    
   
    }

  });
