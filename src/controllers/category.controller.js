const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const newCategory = await CategoryService.createCategory({ name });
    return res.status(201).json(newCategory);
  } catch (error) {
    return res
    .status(500)
    .json({ message: error.message });
  }
};

module.exports = {
  createCategory,
};