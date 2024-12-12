const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const BlogPost = sequelize.define('BlogPost', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

BlogPost.belongsTo(User, { foreignKey: 'authorId', as: 'author' });

module.exports = BlogPost;