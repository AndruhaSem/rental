const express = require("express");
const Slider = require("../models/Slider");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Slider.find();
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибкаю Попробуйте позжк",
    });
  }
});

module.exports = router;
