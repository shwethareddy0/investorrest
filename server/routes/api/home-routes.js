const router = require("express").Router();
const { saveProperty } = require("../../controllers/home-controllers");

const { authMiddleware } = require("../../utils/auth");
//api/users/login
router.route("/save").post(authMiddleware, saveProperty);

module.exports = router;
