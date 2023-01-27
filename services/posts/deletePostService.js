const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const deletePost = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "delete post",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = deletePost;
