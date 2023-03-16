const express = require("express");
const db = require("../models/index");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await db.Booking.findAll();
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибкаю Попробуйте позжк",
    });
  }
});

module.exports = router;
