const express = require("express");
const router = express.Router({ mergeParams: true });
const db = require("../models/index");
const auth = require("../middleware/auth.middleware");

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const list = await db.Money.findAll();
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибкаю Попробуйте позжк",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newMoney = await db.Money.create({
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
