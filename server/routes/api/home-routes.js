const router = require("express").Router();
const {
  login,
  createUser,
  saveProperty,
} = require("../../controllers/user-controllers");

const { authMiddleware } = require("../../utils/auth");
//api/users/login
router.route("/save").post(login);

module.exports = router;
