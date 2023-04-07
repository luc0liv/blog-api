const { usersValidation } = require('../schemas/userSchema');
const { UserService } = require('../services');

const validateIfUserExists = async (req, res, next) => {
  const { email } = req.body;
  const { error } = usersValidation(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const user = await UserService.getByEmail(email);

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return next();
};

module.exports = validateIfUserExists;