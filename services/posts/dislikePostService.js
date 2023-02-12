const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const dislikePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    const isAlreadyLiked = post.disLikes.includes(req.userAuth);
    if (isAlreadyLiked) {
      post.disLikes = post.disLikes.filter(
        (u) => u.toString() !== req.userAuth.toString()
      );
    } else {
      post.disLikes.push(req.userAuth);
    }
    await post.save();

    res.json({
      status: "success",
      data: post,
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = dislikePost;
