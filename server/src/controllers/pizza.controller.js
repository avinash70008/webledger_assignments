
const express = require("express");
const router = express.Router();

const Pizza = require("../models/pizza.model");

router.post("",async(req,res)=>{

    try {
        let pizza = await Pizza.create(req.body);
        return res.status(200).send(pizza)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/search/:text", async (req, res) => {
    try {
      const pizza = await Pizza.find({
        name: { $regex: req.params.text, $options: "i" },
      });
      res.status(200).json({
        success: true,
        pizza,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "An error occurred",
      });
    }
  });

router.get("",async(req,res)=>{

    try {
        let pizza = await Pizza.find().lean().exec();
        return res.status(200).send(pizza)


    } catch (e) {
        return res.status(500).send(e.message)
    }
})
router.get("/:id",async(req,res)=>{

    try {
        let pizza = await Pizza.findById({_id:req.params.id}).lean().exec();
        return res.status(200).send(pizza)


    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/:id",async(req,res)=>{

    try {
        let pizza = await Pizza.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(pizza)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{

    try {
        let pizza = await Pizza.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(pizza)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;