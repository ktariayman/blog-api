const Comment = require("../../model/Comment/Comment.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const createComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "create comment",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = createComment;
