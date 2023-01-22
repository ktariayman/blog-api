const express = require("express");
const {
  createPost,
  getPost,
  getPosts,
} = require("../../controllers/posts/posts.controller");

const postRouter = express.Router();

//POST/api/v1/posts
postRouter.post("/", createPost);
//POST/api/v1/posts
postRouter.get("/", getPosts);

//GET/api/v1/posts/:id
postRouter.get("/:id", getPost);

//PUT/api/v1/posts/:id
postRouter.put("/:id");

//DELETE/api/v1/users/profile/:id
postRouter.delete("/:id");

module.exports = postRouter;
