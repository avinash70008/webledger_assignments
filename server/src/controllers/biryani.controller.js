const express = require("express");

const Biryani = require("../models/biryani.model.js");

const router = express.Router();

//---------------route post--------------
router.post("", async (req, res) => {
  try {
    const biryani = await Biryani.create(req.body);
    return res.status(200).send(biryani);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});



router.get("/search/:text", async (req, res) => {
  try {
    const biryani = await Biryani.find({
      name: { $regex: req.params.text, $options: "i" },
    });
    res.status(200).json({
      success: true,
      biryani,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "An error occurred",
    });
  }
});


router.post("", async (req, res) => {
  try {
    const biryani = await Biryani.create(req.body);
    return res.status(200).send(biryani);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});


router.post("/cart", async (req, res) => {
  try {
    const biryani = await biryani.create(req.body);
    console.log(blazer)
    return res.status(200).send(blazer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});



//---------------route get--------------

router.get("", async (req, res) => {
  try {
    const biryani = await Biryani.find().lean().exec();
    return res.status(200).send(biryani);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//--------------- route get data by id--------------

router.get("/:id", async (req, res) => {
  try {
    const biryani = await Biryani.findById(req.params.id).lean().exec();
    return res.status(200).send(biryani);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
