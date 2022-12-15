const router = require("express").Router();
const {
  saveProperty,
  getSavedProperties,
  deleteProperty,
} = require("../../controllers/home-controllers");

const { authMiddleware } = require("../../utils/auth");

router.route("/save").post(authMiddleware, saveProperty);
router.route("/").get(authMiddleware, getSavedProperties);
router.route("/:id").delete(authMiddleware, deleteProperty);

module.exports = router;
