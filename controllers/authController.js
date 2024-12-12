const { registerUser, loginUser } = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await registerUser(username, password, role);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const result = await loginUser(username, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };
