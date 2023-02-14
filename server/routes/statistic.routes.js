const express = require("express");
const auth = require("../middleware/auth.middleware");
const Statistic = require("../models/Statistics");
const router = express.Router({ mergeParams: true });
const { generateOrderNUmber } = require("../utils/helpers");

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = await Statistic.find({ [orderBy]: equalTo });
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибкаю Попробуйте позжк",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newStatistic = await Statistic.create({
        ...req.body,
        orderNumber: generateOrderNUmber(),
      });
      res.status(201).send(newStatistic);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибкаю Попробуйте позжк",
      });
    }
  });

router.delete("/:statisticId", auth, async (req, res) => {
  try {
    const { statisticId } = req.params;
    const removedStatistic = await Statistic.findById(statisticId);

    await removedStatistic.remove();
    return res.send(null);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибкаю Попробуйте позжк",
    });
  }
});

router.patch("/:statisticId", auth, async (req, res) => {
  try {
    const { statisticId } = req.params;
    if (statisticId) {
      const updatedUser = await Statistic.findByIdAndUpdate(
        statisticId,
        req.body,
        {
          new: true,
        }
      );
      res.send(updatedUser);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибкаю Попробуйте позжк",
    });
  }
});

module.exports = router;
