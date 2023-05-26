const express = require("express");
const router = express.Router({ mergeParams: true });
const db = require("../models/index");
const auth = require("../middleware/auth.middleware");
const orderRepository = require("../repositories/orderRepository");

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      res.send({
        total: parseInt(await orderRepository.calculateTotalSum()),
        cash_total: parseInt(await orderRepository.calculateTotalSumByPayment('cash')),
        card_total: parseInt(await orderRepository.calculateTotalSumByPayment('card')),
        user_total: 10,
      });
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
