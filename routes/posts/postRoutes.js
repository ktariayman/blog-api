const express = require("express");
const postRouter = express.Router();

const posts = require("../../controllers/posts/postsController");

const isLogin = require("../../middlewares/isLogin");

//POST/api/v1/posts
postRouter.post("/", isLogin, posts.controllers.createPost);

//GET/api/v1/posts
postRouter.get("/", posts.controllers.getPosts);

//GET/api/v1/posts/:id
postRouter.get("/:id", posts.controllers.getPost);

//PUT/api/v1/posts/:id
postRouter.put("/:id", posts.controllers.updatePost);

//DELETE/api/v1/posts/:id
postRouter.delete("/:id", posts.controllers.deletePost);

module.exports = postRouter;
