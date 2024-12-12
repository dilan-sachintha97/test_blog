const BlogPost = require('../models/BlogPost');

const getAllBlogs = async () => {
  return BlogPost.findAll();
};

const getAllBlogsByUserId = async (userId) => {
  return BlogPost.findAll({ where: { authorId: userId } });
};

const createBlog = async (title, content, authorId) => {
  return BlogPost.create({ title, content, authorId });
};


const updateBlog = async (id, data) => {
    const blog = await BlogPost.findByPk(id);
    if (!blog) throw new Error('Blog not found');
    return blog.update(data);
  };
  
  const deleteBlog = async (id) => {
    const blog = await BlogPost.findByPk(id);
    if (!blog) throw new Error('Blog not found');
    return blog.destroy();
  };



module.exports = { getAllBlogs, getAllBlogsByUserId, createBlog, updateBlog, deleteBlog };