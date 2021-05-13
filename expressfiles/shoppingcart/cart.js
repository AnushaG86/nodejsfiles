var express=require('express')();
const bodyParser=require('body-parser');
express.use(bodyParser.json());
const route=require('./route');
const mongoose=require('mongoose');
mongoose.connect("monogodb://localhost/cartdb");
mongoose.Promise=global.Promise;
express.use('/shopping',route);

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://madmax:anusha86@cluster1demo.sagoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


express.listen(3000,function(){
    console.log("listening to port 3000");
})
