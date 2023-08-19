const express = require("express");

const Cart = require("../models/cart");

const router = express.Router();

// ---------------route post--------------
router.post("", async (req, res) => {
    console.log(req.body)
    try {
        const cart = await Cart.create(req.body);
        console.log(cart)
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


// ---------------route get--------------

router.get("", async (req, res) => {
    try {
        const cart = await Cart.find().lean().exec();
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// --------------- route get data by id--------------

router.get("/:id", async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).lean().exec();
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const cart = await Cart.deleteOne({_id:req.params.id}).lean().exec();
        const carts = await Cart.find().lean().exec();
        return res.status(200).send(carts);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id , {qty:req.body.qty} ,{new : true}).lean().exec();
        console.log(cart)
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
module.exports = router;
