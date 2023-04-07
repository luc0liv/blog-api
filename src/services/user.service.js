const { User } = require('../models');

const getAllUsers = () => User.scope('withoutPassword').findAll();

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = (user) => User.create({ ...user });

module.exports = {
  getAllUsers,
  getByEmail,
  createUser,
};
