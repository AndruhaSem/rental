const express = require("express");
const auth = require("../middleware/auth.middleware");
const db = require("../models/index");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = await db.Order.findAll();
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибкаю Попробуйте позжк",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newStatistic = await db.Order.create({...req.body});
      res.status(201).send(newStatistic);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибкаю Попробуйте позжк",
      });
    }
  });

router.delete("/:order_id", auth, async (req, res) => {
  try {
    const { order_id } = req.params;
    console.log(order_id)
    await db.Order.destroy({
      where: {
        id: order_id
      }
    });
    return res.send({success: true});
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
});

router.patch("/:order_id", auth, async (req, res) => {
  try {
    const { order_id } = req.params;
    if (order_id) {
      const updatedUser = await db.Order.update(
        req.body,
        {
          where: {
            id: order_id,
          }
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
