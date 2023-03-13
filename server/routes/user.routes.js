const express = require("express");
const db = require("../models/index");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (parseInt(userId) === parseInt(req.user._id)) {
      // TODO
      const updatedUser = await db.User.findByPk(userId);
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
router.get("/:userId", auth, async (req, res) => {
  const { userId } = req.params;
  try {
    if (parseInt(userId) === parseInt(req.user._id)) {
      const user = await db.User.findByPk(userId);
      res.send({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      });
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
