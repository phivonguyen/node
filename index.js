var express=require("express"); 
var nodemailer = require("nodemailer");
var app=express(); 
var port=3000; 
var expressLayouts = require('express-ejs-layouts');

app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
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

app.get("/email",(req,res)=>{ 
    res.render("partials/email"); 
}); 

app.post("/post-email", function(req,res){ 
    console.log(req.body.emailgui);
    console.log(req.body.emailnhan);
    console.log(req.body.noidung);
    //Cai dat email
    var option = {
        service: 'gmail',
        auth: {
            user: 'nonameok2010@gmail.com',
            pass: 'gmhb uqea cymg hovo'
        }
    };
    var transporter = nodemailer.createTransport(option);

    transporter.verify(function(error, success) {
        // Nếu có lỗi.
        if (error) {
            console.log(error);
        } 
        else { //Nếu thành công.
            console.log('Kết nối thành công!');
        }
    });

    var mail = {
        from: req.body.emailgui, // Địa chỉ email của người gửi
        to: req.body.emailnhan, // Địa chỉ email của người gửi
        subject: req.body.chude, // Tiêu đề mail
        // text: req.body.noidung, // Nội dung dạng text
        html: req.body.noidung // Nội dung dạng html
        };
        //Tiến hành gửi email
        transporter.sendMail(mail, function(error, info) {
            if (error) { // nếu có lỗi
                console.log(error);
            } else { //nếu thành công
                console.log('Email sent: ' + info.response);
            }
        });
        
    res.redirect("email");
}); 