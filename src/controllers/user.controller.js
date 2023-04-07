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
      .json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  login,
};