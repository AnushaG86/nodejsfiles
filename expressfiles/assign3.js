
var express=require("express");
var app=express();
var port=process.argv[2];

app.get('/home',function(req,res){
    res.send("hello world");
})

app.listen(process.env.PORT || 3000,function(){
    console.log("port listening to "+port);
});