const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const updatePost = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user update post",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = updatePost;
