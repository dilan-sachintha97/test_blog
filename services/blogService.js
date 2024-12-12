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


const updateBlog = async (id, data, userId, userRole) => {
  const blog = await BlogPost.findByPk(id);
  if (!blog) throw new Error('Blog not found');

  // admin kenukuth newi, own user th newi 
  if (userRole !== 'admin' && blog.authorId !== userId) {
    throw new Error('Unauthorized');
  }
  return blog.update(data);
};

const deleteBlog = async (id, userId, userRole) => {
  const blog = await BlogPost.findByPk(id);
  if (!blog) throw new Error('Blog not found');
  if (userRole !== 'admin' && blog.authorId !== userId) {
    throw new Error('Unauthorized');
  }
  return blog.destroy();
};

module.exports = { getAllBlogs, getAllBlogsByUserId, createBlog, updateBlog, deleteBlog };