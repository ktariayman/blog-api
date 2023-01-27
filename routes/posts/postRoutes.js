const express = require("express");
const {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost,
} = require("../../controllers/posts/posts.controller");
const isLogin = require("../../middlewares/isLogin");
const postRouter = express.Router();

//POST/api/v1/posts
postRouter.post("/", isLogin, createPost);

//GET/api/v1/posts
postRouter.get("/", getPosts);

//GET/api/v1/posts/:id
postRouter.get("/:id", getPost);

//PUT/api/v1/posts/:id
postRouter.put("/:id", updatePost);

//DELETE/api/v1/posts/:id
postRouter.delete("/:id", deletePost);

module.exports = postRouter;
