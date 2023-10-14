var express=require("express"); 
var app=express(); 
var port=3000; 
var expressLayouts = require('express-ejs-layouts');

app.use(express.static("public")); 
app.use(express.json());
app.use(expressLayouts);

app.set("view engine","ejs"); 
app.set("views","./views"); 
app.listen(port); 
app.get("/",function(req,res){ 
    res.render("partials/trangchu.ejs"); 
}); 

app.get("/gioi-thieu",(req,res)=>{ 
    res.render("partials/gioithieu"); 
}); 