var express=require('express');
const Cart = require('../shoppingcart/schema');
const router=express.Router();
const cartdb=require("../shoppingcart/schema");
router.post('/cart',function(req,res){
    var cart=new Cart(req.body);
    cart.save();
    res.send({
        type:'POST',
        name:req.body.Productname,
        id:req.body.Productid,
        Price:req.body.Productprice

    })
});
router.get('/cart',function(req,res){
    res.send({
            name:req.body.Productname,
            id:req.body.Productid,
            Price:req.body.Productprice
    
        })
    });
router.get('/cart/:id', (req, res) => {
    res.send({
        type:'GET',
        name:req.body.Productname,
        id:req.body.Productid,
        Price:req.body.Productprice

    })
});

router.put('/cart/:id',function(req,res){
    res.send({
        type:"PUT"
    });
})
router.delete('/cart/:id',function(req,res){
    res.send({
        type:"DELETE"
    });
})
module.exports=router;