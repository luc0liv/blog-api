const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

// router.post('/', validateToken, blogPostController.createNewPost);
router.get('/', validateToken, blogPostController.getPosts);
router.get('/:id', validateToken, blogPostController.getPostById);

module.exports = router;