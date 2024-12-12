const { getAllBlogs, getAllBlogsByUserId, createBlog, updateBlog, deleteBlog } = require('../services/blogService');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await createBlog(title, content, req.user.id);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await getAllBlogs();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserPosts = async (req, res) => {
    try {
      const posts = await getAllBlogsByUserId(req.user.id);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updatePost = async (req, res) => {
    try {
      const { title, content } = req.body;
      const post = await updateBlog(req.params.id, { title, content });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.deletePost = async (req, res) => {
    try {
      await deleteBlog(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };