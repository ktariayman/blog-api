const express = require("express");

const postRouter = express.Router();

//POST/api/v1/posts
postRouter.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "post created",
    });
  } catch (error) {
    res.json(error.message);
  }
});
//POST/api/v1/posts
postRouter.get("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "all posts",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//GET/api/v1/posts/:id
postRouter.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "one post",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//PUT/api/v1/posts/:id
postRouter.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user update post",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//DELETE/api/v1/users/profile/:id
postRouter.delete("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete post",
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = postRouter;
