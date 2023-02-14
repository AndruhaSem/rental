const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/statistic", require("./statistic.routes"));
router.use("/booking", require("./booking.routes"));
router.use("/slider", require("./slider.routes"));
router.use("/money", require("./money.routes"));
router.use("/user", require("./user.routes"));

module.exports = router;
