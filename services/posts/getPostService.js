const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // user has viewed this post ??

    const userHasViewedPost = post.numViews.includes(req.userAuth);
    if (userHasViewedPost) {
      res.json({
        status: "success",
        data: post,
      });
    } else {
      post.numViews.push(req.userAuth);
      await post.save();
      res.json({
        status: "success",
        data: post,
      });
    }
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = getPost;
