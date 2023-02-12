const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("user")
      .populate("category", "title");

    //  check if the user is blocked by the post owner
    const filteredPosts = posts.filter((post) => {
      const blockedUsers = post.user?.blocked;
      console.log("blockedUsers", blockedUsers);
      if (blockedUsers === undefined) {
        const isBlocked = null;
        return isBlocked;
      }
      const isBlocked = blockedUsers.includes(req.userAuth);
      if (!isBlocked) return post;
    });
    res.json({
      status: "success",
      data: posts,
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = getPosts;
