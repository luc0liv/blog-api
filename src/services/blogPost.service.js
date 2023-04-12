const { BlogPost, User, Category } = require('../models');

// const createBlogPost = (post) => {
//   BlogPost.create({ ...post });
// };

const getPosts = () =>
  BlogPost.findAll({
    include: [
      {
        model: User.scope('withoutPassword'),
        as: 'user',
      },
      { 
        model: Category, 
        as: 'categories', 
        through: { attributes: [] },
      },
    ],
  });

module.exports = {
  // createBlogPost,
  getPosts,
};
