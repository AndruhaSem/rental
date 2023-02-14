const express = require("express");
const router = express.Router({ mergeParams: true });
const Money = require("../models/Money");
const auth = require("../middleware/auth.middleware");

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const list = await Money.find();
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибкаю Попробуйте позжк",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newMoney = await Money.create({
        ...req.body,
      });
      res.status(201).send(newMoney);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибкаю Попробуйте позжк",
      });
    }
  });

module.exports = router;
