const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    const isAlreadyLiked = post.likes.includes(req.userAuth);
    if (isAlreadyLiked) {
      post.likes = post.likes.filter(
        (u) => u.toString() !== req.userAuth.toString()
      );
      await post.save();
    } else {
      post.likes.push(req.userAuth);
      await post.save();
    }

    res.json({
      status: "success",
      data: post,
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = likePost;
