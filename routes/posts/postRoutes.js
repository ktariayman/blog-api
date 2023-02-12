const express = require("express");
const postRouter = express.Router();
const isLogin = require("../../middlewares/isLogin");
const storage = require("../../config/cloudinary");
const multer = require("multer");
const posts = require("../../controllers/posts/postsController");

const upload = multer({ storage });
//POST/api/v1/posts
postRouter.post(
  "/",
  isLogin,
  upload.single("image"),
  posts.controllers.createPost
);

//GET/api/v1/posts
postRouter.get("/", isLogin, posts.controllers.getPosts);

//GET/api/v1/posts/likes/:id
postRouter.get("/likes/:id", isLogin, posts.controllers.likePost);

//GET/api/v1/posts/dislikes/:id
postRouter.get("/dislikes/:id", isLogin, posts.controllers.dislikePost);

//GET/api/v1/posts/:id
postRouter.get("/:id", isLogin, posts.controllers.getPost);

//PUT/api/v1/posts/:id
postRouter.put(
  "/:id",
  isLogin,
  upload.single("image"),
  posts.controllers.updatePost
);

//DELETE/api/v1/posts/:id
postRouter.delete("/:id", isLogin, posts.controllers.deletePost);

module.exports = postRouter;
