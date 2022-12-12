const router = require('express').Router();
const {login} = require('../../controllers/user-controllers')


//api/users/login
router.route('/login').post(login);