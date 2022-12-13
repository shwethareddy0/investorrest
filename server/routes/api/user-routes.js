const router = require('express').Router();
const {login, createUser, saveProperty } = require('../../controllers/user-controllers')

const { authMiddleware } = require('../../utils/auth');
//api/users/login
router.route('/login').post(login);
//api/users
router.route('/').post(createUser).put(authMiddleware, saveProperty);
module.exports = router;