const router = require("express").Router();
const {
  saveProperty,
  getSavedProperties,
  deleteProperty,
} = require("../../controllers/home-controllers");

const { authMiddleware } = require("../../utils/auth");

// save property route
router.route("/save").post(authMiddleware, saveProperty);
// get saved properties route
router.route("/").get(authMiddleware, getSavedProperties);
// delete saved property route
router.route("/:id").delete(authMiddleware, deleteProperty);

module.exports = router;
