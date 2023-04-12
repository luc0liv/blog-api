const { PostService } = require('../services');

// const createNewPost = async (req, res) => {
//   try {
//     const newPost = await PostService.createBlogPost(req.body);
//     return res.status(201).json(newPost);
//   } catch (error) {
//     return res
//     .status(500)
//     .json({ message: error.message });
//   }
// };

const getPosts = async (_req, res) => {
  try {
    const posts = await PostService.getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  // createNewPost,
  getPosts,
};