const mongoose=require('mongoose');
const schema=mongoose.Schema;
const cartschema=new schema({
    Productid:{
        type:Number,
        required:true
    },
    Productname:{
        type:String,
        required:true
    },
    Productprice:{
        type:Number,
        required:true
    }
});
const Cart=mongoose.model('cart',cartschema);
module.exports=Cart;