var express=require('express');
var app=express();
app.listen(3000,function(){
    console.log("listening to port 3000");
});
app.get('/year',function(req,res){
    var year=(new Date()).getFullYear();
    var age1=req.query.age.toString();
    var curr=year-parseInt(age1);
    res.send("the year of born is:"+curr);
})