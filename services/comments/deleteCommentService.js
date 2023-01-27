const Comment = require("../../model/Comment/Comment.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const deleteComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "delete comment",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = deleteComment;
