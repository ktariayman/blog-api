const Post = require("../../model/Post/Post.model");
const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const createPost = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    const author = await User.findById(req.userAuth);
    if (!author)
      return next(errorHandler("there are no user to create the post", 400));
    if (author.isBlocked)
      return next(errorHandler("Acces denied, account blocked", 403));
    const postCreate = await Post.create({
      title,
      description,
      user: author._id,
      category,
      photo: req?.file?.path,
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
