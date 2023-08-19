const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema(
  {
    img : {type : String , required : true },
    price : {type : Number , required : true },
    qty: {type:Number , required: false, default:1},
    disc:{type: String, required: true}
 
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports =  mongoose.model('cart', cartSchema);