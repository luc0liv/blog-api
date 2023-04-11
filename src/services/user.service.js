const { User } = require('../models');

const getAllUsers = () => User.scope('withoutPassword').findAll();

const getByEmail = (email) => User.findOne({ where: { email } });

const getUserById = (id) => User.scope('withoutPassword').findByPk(id);

const createUser = (user) => User.create({ ...user });

module.exports = {
  getAllUsers,
  getUserById,
  getByEmail,
  createUser,
};
