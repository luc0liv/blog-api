const { User } = require('../models');

const getAllUsers = () => User.findAll();

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  getAllUsers,
  getByEmail,
};
