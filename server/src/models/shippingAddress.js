const mongoose = require('mongoose');


const shippingAddressSchema = new mongoose.Schema(
    {
        
      firstname: {type:String, required:true},
      lastname: {type:String, required:true},
      email: {type:String, required:true},
        phone: {type:Number, required:true},
        city: {type:String, required:true},
        state: {type:String, required:true},
        pincode: {type:Number, required:true},
        }, 
       {
            timestamps: true,
        }
  );

  const shippingAddress = mongoose.model("shippingAddress", shippingAddressSchema);
  module.exports= shippingAddress;