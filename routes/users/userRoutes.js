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
  following,
  unfollowing,
  blockingUser,
  unblockingUser,
  adminBlockUser,
  adminUnblockUser,
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

//GET/api/v1/users/following/id
userRouter.get("/following/:id", isLogin, following);
//GET/api/v1/users/unfollowing/id
userRouter.get("/unfollowing/:id", isLogin, unfollowing);
//GET/api/v1/users/blocking/id

userRouter.get("/blocking/:id", isLogin, blockingUser);
//GET/api/v1/users/unblocking/id
userRouter.get("/unblocking/:id", isLogin, unblockingUser);
//PUT/api/v1/users/admin-block/id

userRouter.put("/admin-block/:id", isLogin, adminBlockUser);

//PUT/api/v1/users/admin-unblock/id

userRouter.put("/admin-unblock/:id", isLogin, adminUnblockUser);

//POST/api/v1/users/profile-photo-upload
userRouter.post(
  "/profile-photo-upload",
  isLogin,
  upload.single("profile"),
  uploadPhotoProfile
);
module.exports = userRouter;
