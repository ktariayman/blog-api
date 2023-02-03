const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("users")
      .populate("category", "title");
    res.json({
      status: "success",
      data: posts,
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = getPosts;
