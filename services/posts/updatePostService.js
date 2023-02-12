const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const updatePost = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return next(
        errorHandler("post with id: " + req.params.id + "does not exist ", 403)
      );
    }
    if (post.user.toString() !== req.userAuth.toString()) {
      return next(errorHandler("not allowed to update ", 403));
    }
    await Post.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        category,
        photo: req?.file?.path,
      },
      {
        new: true,
      }
    );

    res.json({
      status: "success",
      data: "user update post",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = updatePost;
