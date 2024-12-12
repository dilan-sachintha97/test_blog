const express = require('express');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/blogController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/', authenticate, getPosts);
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);

module.exports = router;