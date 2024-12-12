const express = require('express');
const { createPost, getPosts, getUserPosts, updatePost, deletePost } = require('../controllers/blogController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/', authenticate, getPosts);
router.get('/user', authenticate, getUserPosts);
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);

module.exports = router;