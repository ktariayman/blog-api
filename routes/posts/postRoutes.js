const express = require("express");
const postRouter = express.Router();

const posts = require("../../controllers/posts/postsController");

const isLogin = require("../../middlewares/isLogin");

//POST/api/v1/posts
postRouter.post("/", isLogin, posts.controllers.createPost);

//GET/api/v1/posts
postRouter.get("/", isLogin, posts.controllers.getPosts);

//GET/api/v1/posts/:id
postRouter.get("/:id", isLogin, posts.controllers.getPost);

//PUT/api/v1/posts/:id
postRouter.put("/:id", isLogin, posts.controllers.updatePost);

//DELETE/api/v1/posts/:id
postRouter.delete("/:id", isLogin, posts.controllers.deletePost);

module.exports = postRouter;
