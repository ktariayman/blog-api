const createComment = require("../../services/comments/createCommentService");
const getComment = require("../../services/comments/getCommentService");
const updateComment = require("../../services/comments/updateCommentService");
const deleteComment = require("../../services/comments/deleteCommentService");

exports.controllers = {
  createComment,
  getComment,
  updateComment,
  deleteComment,
};
