const router = require("express").Router();
const { saveProperty } = require("../../controllers/home-controllers");

const { authMiddleware } = require("../../utils/auth");

router.route("/save").post(authMiddleware, saveProperty);
router.route("/").get(authMiddleware, getSavedProperties);

module.exports = router;
