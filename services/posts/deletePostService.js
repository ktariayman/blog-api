const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return next(
        errorHandler("post with id: " + req.params.id + "does not exist ", 403)
      );
    }
    if (post.user.toString() !== req.userAuth.toString()) {
      return next(errorHandler("not allowed to delete ", 403));
    }
    await Post.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      data: "delete post",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = deletePost;
