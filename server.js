const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/users/userRoutes");
require("dotenv").config();
// connect to database
connectDB();
const app = express();

//middlewares

// routes
//-------
app.use("/api/v1/users", userRouter);
// user routes

//POST/api/v1/users/register
app.post("/api/v1/users/register", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user registered",
    });
  } catch (error) {
    res.json(error.message);
  }
});
//POST/api/v1/users/login
app.post("/api/v1/users/login", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user login",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//GET/api/v1/users/profile/:id
app.get("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "profile",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//PUT/api/v1/users/profile/:id
app.put("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user updateprofile",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//DELETE/api/v1/users/profile/:id
app.delete("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete profile",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//-----
// posts routes
// -----

//POST/api/v1/posts
app.post("/api/v1/posts", async (req, res) => {
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
app.get("/api/v1/posts", async (req, res) => {
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
app.get("/api/v1/posts/:id", async (req, res) => {
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
app.put("/api/v1/posts/:id", async (req, res) => {
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
app.delete("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete post",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//-----
// comment routes
//-----

//POST/api/v1/comments
app.post("/api/v1/comments", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//GET/api/v1/comments/:id
app.get("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "one comment",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//PUT/api/v1/comments/:id
app.put("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user update comment",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//DELETE/api/v1/comments/:id
app.delete("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete comment",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//-----
// categories routes
//-----

//POST/api/v1/comments
app.post("/api/v1/categories", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "category created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//GET/api/v1/comments/:id
app.get("/api/v1/categories/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "one category",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//PUT/api/v1/comments/:id
app.put("/api/v1/categories/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user update category",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//DELETE/api/v1/comments/:id
app.delete("/api/v1/categories/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete category",
    });
  } catch (error) {
    res.json(error.message);
  }
});
// error handlers middleware

//listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is running on port : " + PORT));
