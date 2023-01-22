const express = require("express");

const userRouter = express.Router();

//POST/api/v1/users/register
userRouter.post("/register", async (req, res) => {
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
userRouter.post("/login", async (req, res) => {
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
userRouter.get("/profile/:id", async (req, res) => {
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
userRouter.put("/profile/:id", async (req, res) => {
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
userRouter.delete("/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete profile",
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = userRouter;
