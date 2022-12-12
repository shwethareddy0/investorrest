const router = require('express').Router();
const {login, createUser} = require('../../controllers/user-controllers')


//api/users/login
router.route('/login').post(login);
//api/users
router.route('/').post(createUser)
module.exports = router;