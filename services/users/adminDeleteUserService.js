const User = require("../../model/User/User.model");
const Comment = require("../../model/Comment/Comment.model");
const Category = require("../../model/Category/Category.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");
const Post = require("../../model/Post/Post.model");
const adminDeleteUser = async (req, res, next) => {
  try {
    const userToDelete = await User.findById(req.params.id);
    if (!userToDelete) return next(errorHandler("user does not exist"));
    await Post.deleteMany({ user: req.userAuth });
    await Comment.deleteMany({ user: req.userAuth });
    await Category.deleteMany({ user: req.userAuth });
    await userToDelete.delete();
    res.json({
      status: "success",
      data: `admin delete the user profile with id :${req.params.id}`,
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = adminDeleteUser;
