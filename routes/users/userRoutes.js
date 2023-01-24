const express = require("express");
const multer = require("multer");
const storage = require("../../config/cloudinary");
const {
  userRegister,
  userLogin,
  getUser,
  updateUser,
  deleteUser,
  uploadPhotoProfile,
  whoViewMyProfile,
} = require("../../controllers/users/user.controller");
const isLogin = require("../../middlewares/isLogin");
const userRouter = express.Router();

// instance of multer
const upload = multer({ storage });
//POST/api/v1/users/register
userRouter.post("/register", userRegister);

//POST/api/v1/users/login
userRouter.post("/login", userLogin);

//GET/api/v1/users/profile/:id
userRouter.get("/profile", isLogin, getUser);

//PUT/api/v1/users/profile/:id
userRouter.put("/profile/:id", updateUser);

//DELETE/api/v1/users/profile/:id
userRouter.delete("/profile/:id", deleteUser);

//GET/api/v1/users/profile-viewers/id
userRouter.get("/profile-viewers/:id", isLogin, whoViewMyProfile);
//POST/api/v1/users/profile-photo-upload
userRouter.post(
  "/profile-photo-upload",
  isLogin,
  upload.single("profile"),
  uploadPhotoProfile
);
module.exports = userRouter;
