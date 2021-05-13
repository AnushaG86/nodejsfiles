const bodyParser = require("body-parser");
var express=require("express");
var app=express();
var path=require('path');
var urlencodedParser=bodyParser.urlencoded({extended:false});
app.use(urlencodedParser);
app.post('/contact',(req,res)=>{
    var name=req.body.user.split('').reverse().join('');
    res.send('the username is '+name);
});

app.get('/',(req,res)=>{
    res.sendFile('assign6.html',{root:path.join(__dirname,'public')})
})


app.listen(process.env.PORT || 3000);