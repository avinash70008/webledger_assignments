
const mongoose = require("mongoose");

const BurgerSchema = new mongoose.Schema({

    name:{type:String, required: true},
    img : {type : String , required : true },
    price : {type : Number , required : true },
    qty: {type:Number , required: false, default:1},
    disc:{type: String, required: true}
    
})

module.exports = mongoose.model("burger", BurgerSchema)