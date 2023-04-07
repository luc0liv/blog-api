const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  jwt.verify(token, secret, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    return next();
  });
};

module.exports = validateToken;