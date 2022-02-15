
const http = require('http');
const fs = require('fs');


const file = (fileName) => fs.createReadStream(fileName, 'utf-8');

http
  .createServer((req, res) => {
    if (req.url.startsWith('/style.css')) {
      res.setHeader('Content-Type', 'text/css');
      file('./assets/css/style.css').pipe(res);
    }
    else if(req.url.startsWith('/vendor.css')) {
        res.setHeader('Content-Type', 'text/css');
      file('./assets/css/vendor.css').pipe(res);
    }

    if (req.url.startsWith('/admin')) {
      if (req.url === '/admin') {
        file('./assets/admin.html').pipe(res);
      } else {
        file('./assets/login.html').pipe(res);
      }
    } else if (req.url === '/index.html') {
      file('./assets/index.html').pipe(res);
    
    } else if (req.url === '/contact.html') {
        file('./assets/contact.html').pipe(res); }
    else if (req.url === '/about.html') {
      file('.assets/admin.html').pipe(res);
    } 
    else {
      file('./assets/readme.txt').pipe(res);
    }
  })
  .listen(3000);


