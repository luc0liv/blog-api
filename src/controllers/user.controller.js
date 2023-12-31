const { UserService } = require('../services');
const generateToken = require('../utils/token');

const validateEmailAndPassword = (req, res) => {
  const { email, password } = req;
  if (!email || !password) {
    res
    .status(400)
    .json({ message: 'Some required fields are missing' });
    return false;
  }
  return true;
};

const validateFields = (user, req, res) => {
  const { email, password } = req.body;
  
    if (!user || user.password !== password || user.email !== email) {
      res
      .status(400)
      .json({ message: 'Invalid fields' });
      return false;
    }

    return true;
};

const login = async (req, res) => {
  const { email } = req.body;
  try {
    if (!validateEmailAndPassword(req.body, res)) return;

    const user = await UserService.getByEmail(email);
    if (!validateFields(user, req, res)) return;

    const token = generateToken(user);

    return res.status(200).json({ token });    
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await UserService.createUser(req.body);
    const token = generateToken(newUser.id);
    return res.status(201).json({ token });
  } catch (error) {
    return res
    .status(500)
    .json({ message: error.message });
}
};

const getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res
    .status(500)
    .json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res
    .status(500)
    .json({ message: error.message });
  }
};

module.exports = {
  login,
  createUser,
  getUsers,
  getUserById,
};