const express = require("express");
const db = require("../models/index");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    
    if (userId) {
      await db.User.update( 
        req.body,
        {
          where: {
            id: userId,
          }
        });
      const user = await db.User.findByPk(userId);
      res.send(user);
      console.log(user)
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    res.status(500).json({
      message: e,
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
        is_admin: user.is_admin,
        products_count: user.products_count
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
