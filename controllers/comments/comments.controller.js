const createComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment created",
    });
  } catch (error) {
    res.json(error.message);
  }
};
const getComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "one comment",
    });
  } catch (error) {
    res.json(error.message);
  }
};
const updateComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user update comment",
    });
  } catch (error) {
    res.json(error.message);
  }
};
const deleteComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete comment",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = { createComment, getComment, updateComment, deleteComment };
