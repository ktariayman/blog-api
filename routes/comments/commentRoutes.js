const express = require("express");
const comments = require("../../controllers/comments/commentsController");

const commentRouter = express.Router();

//POST/api/v1/comments
commentRouter.post("/", comments.controllers.createComment);

//GET/api/v1/comments/:id
commentRouter.get("/:id", comments.controllers.getComment);

//PUT/api/v1/comments/:id
commentRouter.put("/:id", comments.controllers.updateComment);

//DELETE/api/v1/comments/:id
commentRouter.delete("/:id", comments.controllers.deleteComment);

module.exports = commentRouter;
