const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      foreignKey: 'category_id',
      as: 'posts_categories',
    });
  }

  return Category;
}

module.exports = CategoryModel;