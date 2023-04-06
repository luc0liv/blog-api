const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.STRING, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users'
    });
    BlogPost.hasMany(models.PostCategory, {
      foreignKey: 'post_id',
      as: 'posts_categories',
    });
  }

  return BlogPost;
};

module.exports = BlogPostModel;