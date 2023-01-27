const Comment = require("../../model/Comment/Comment.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const getComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: " get comment",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = getComment;
