const router = require("express").Router();
const userRoutes = require("./user-routes");
const homeRoutes = require("./home-routes");
router.use("/users", userRoutes);
router.use("/homes", homeRoutes);
module.exports = router;
