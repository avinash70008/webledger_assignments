
const express = require("express");
const router = express.Router();

const Burger = require("../models/burgerModel");

router.post("",async(req,res)=>{

    try {
        let burger = await Burger.create(req.body);
        return res.status(200).send(burger)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})


router.get("/search/:text", async (req, res) => {
    try {
      const burger = await Burger.find({
        name: { $regex: req.params.text, $options: "i" },
      });
      res.status(200).json({
        success: true,
        burger,
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
        let burger = await Burger.find().lean().exec();
        return res.status(200).send(burger)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/:id",async(req,res)=>{

  
    try {
        let burger = await Burger.findById({_id:req.params.id}).lean().exec();
        console.log(burger)
        return res.status(200).send(burger)
  
    } catch (e) {
        return res.status(500).send(e.message)

    }
})

router.patch("/:id",async(req,res)=>{

    try {
        let burger = await Burger.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(burger)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{

    try {
        let burger = await Burger.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(burger)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;