const express=require("express");

const app=express();
app.set('view engine','ejs');
app.set('views','view');
app.listen("3000");
app.use('/',express.static('view/css'));
app.use('/assets',express.static('view/assets'));
app.get("/",(req,res)=>{
res.render("index");
});