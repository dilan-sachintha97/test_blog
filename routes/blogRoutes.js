const express = require('express');
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getAllUserPosts,
} = require('../controllers/blogController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/', authenticate, getPosts);
router.get('/all', getAllUserPosts); // New route for fetching all blogs
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);

module.exports = router;
