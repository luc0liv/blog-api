const express = require('express');
const userController = require('../controllers/user.controller');
const validateIfUserExists = require('../middlewares/validateIfUserExists');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateIfUserExists, userController.createUser);
router.get('/', validateToken, userController.getUsers);
router.get('/:id', validateToken, userController.getUserById);

module.exports = router;