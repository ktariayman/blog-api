const Comment = require('../../model/Comment/Comment.model');
const Post = require('../../model/Post/Post.model');
const { errorHandler } = require('../../utils/ErrorHandler');

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return next(errorHandler('comment with id: ' + req.params.id + 'does not exist ', 403));
    }
    if (!description)
      return next(errorHandler('there are no description to update the comment', 400));

    if (comment.user.toString() !== req.userAuth.toString()) {
      return next(errorHandler('not allowed to update ', 403));
    }
    // const commentUpdated = await Comment.findByIdAndUpdate(
    //   req.params.id,
    //   {
    //     description
    //   },
    //   { new: true, runValidators: true }
    // );
    comment.description = req?.body?.description;
    comment.save();
    res.json({
      status: 'success',
      data: commentUpdated
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = updateComment;
