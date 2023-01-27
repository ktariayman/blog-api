const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const createPost = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const author = await User.findById(req.userAuth);
    if (!author)
      return next(errorHandler("there are no user to create the post", 400))();
    const postCreate = await Post.create({
      title,
      description,
      user: author._id,
    });
    author.posts.push(postCreate);
    await author.save();
    res.json({
      status: "success",
      data: postCreate,
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = createPost;
