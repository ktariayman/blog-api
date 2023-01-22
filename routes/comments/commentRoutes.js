const express = require("express");
const {
  createComment,
  getComment,
  updateComment,
  deleteComment,
} = require("../../controllers/comments/comments.controller");

const commentRouter = express.Router();

//POST/api/v1/comments
commentRouter.post("/", createComment);

//GET/api/v1/comments/:id
commentRouter.get("/:id", getComment);

//PUT/api/v1/comments/:id
commentRouter.put("/:id", updateComment);

//DELETE/api/v1/comments/:id
commentRouter.delete("/:id", deleteComment);

module.exports = commentRouter;
