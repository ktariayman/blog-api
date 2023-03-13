const express = require('express');
const comments = require('../../controllers/comments/commentsController');
const commentRouter = express.Router();
const isLogin = require('../../middlewares/isLogin');
//POST/api/v1/comments
commentRouter.post('/:id', isLogin, comments.controllers.createComment);

//GET/api/v1/comments/:id
commentRouter.get('/:id', comments.controllers.getComment);

//PUT/api/v1/comments/:id
commentRouter.put('/:id', isLogin, comments.controllers.updateComment);

//DELETE/api/v1/comments/:id
commentRouter.delete('/:id', isLogin, comments.controllers.deleteComment);

module.exports = commentRouter;
