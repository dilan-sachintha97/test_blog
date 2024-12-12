const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../config/jwt');

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
  if (!passwordRegex.test(password)) {
    throw new Error('Password must be at least 8 characters long and include at least one letter and one number.');
  }
};

const registerUser = async (username, password, role) => {
  validatePassword(password);
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({ username, password: hashedPassword, role });
};


const loginUser = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = generateToken({ id: user.id, role: user.role });
  return { token, user };
};

module.exports = { registerUser, loginUser };