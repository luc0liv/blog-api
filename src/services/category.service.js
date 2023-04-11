const { Category } = require('../models');

const createCategory = (category) => Category.create({ ...category });
const getAllCategories = () => Category.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};