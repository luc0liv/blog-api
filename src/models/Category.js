const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostsCategories, {
      foreignKey: 'category_id',
      as: 'posts_categories',
    });
  }

  return Category;
}

module.exports = CategoryModel;