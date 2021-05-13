
var express=require("express");
var app=express();
app.listen(8080);
app.get('/',function(req,res){
    res.send("hello world");
})
app.get('/time',function(req,res){
    var date=new Date();

    res.send("cureent time and date is:"+date);
})