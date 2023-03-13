const Comment = require('../../model/Comment/Comment.model');
const { errorHandler } = require('../../utils/ErrorHandler');

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.user.toString() !== req.userAuth.toString()) {
      return next(errorHandler('not allowed to update ', 403));
    }
    await Comment.findByIdAndDelete(req.params.id);
    res.json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = deleteComment;
