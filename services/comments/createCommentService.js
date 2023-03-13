const Comment = require('../../model/Comment/Comment.model');
const Post = require('../../model/Post/Post.model');
const User = require('../../model/User/User.model');
const { errorHandler } = require('../../utils/ErrorHandler');

const createComment = async (req, res, next) => {
  const { description } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    const comment = await Comment.create({
      post: post._id,
      description: description,
      user: req.userAuth
    });
    post.comments.push(comment._id);
    const user = await User.findById(req.userAuth);
    user.comments.push(comment._id);
    // save

    await post.save({ validateBeforeSave: false });
    await user.save({ validateBeforeSave: false });
    res.json({
      status: 'success',
      data: comment
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};
module.exports = createComment;
