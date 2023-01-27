const Comment = require("../../model/Comment/Comment.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const updateComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: " update Comment",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = updateComment;
