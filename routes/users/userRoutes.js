const express = require("express");
const {
  userRegister,
  userLogin,
  getUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users/user.controller");

const userRouter = express.Router();

//POST/api/v1/users/register
userRouter.post("/register", userRegister);

//POST/api/v1/users/login
userRouter.post("/login", userLogin);

//GET/api/v1/users/profile/:id
userRouter.get("/profile/:id", getUser);

//PUT/api/v1/users/profile/:id
userRouter.put("/profile/:id", updateUser);

//DELETE/api/v1/users/profile/:id
userRouter.delete("/profile/:id", deleteUser);

module.exports = userRouter;
