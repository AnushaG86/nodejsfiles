var express=require("express");
var app=express();
app.listen(3000);
app.use('/public', express.static('public'));