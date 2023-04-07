const express = require('express');
const userController = require('../controllers/user.controller');
const validateIfUserExists = require('../middlewares/validateIfUserExists');

const router = express.Router();

router.post('/', validateIfUserExists, userController.createUser);

module.exports = router;