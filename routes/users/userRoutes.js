const express = require("express");
const multer = require("multer");
const storage = require("../../config/cloudinary");
const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");
const userRouter = express.Router();
const users = require("../../controllers/users/usersController");
// instance of multer
const upload = multer({ storage });
//POST/api/v1/users/register
userRouter.post("/register", users.controllers.userRegister);

//POST/api/v1/users/login
userRouter.post("/login", users.controllers.userLogin);

//GET/api/v1/users/profile/:id
userRouter.get("/profile", isLogin, users.controllers.getUser);

//GET/api/v1/users
userRouter.get("/", users.controllers.getUsers);
//PUT/api/v1/users/profile
userRouter.put("/profile", isLogin, users.controllers.updateUser);

//PUT/api/v1/users/profile/password
userRouter.put(
  "/profile/password",
  isLogin,
  users.controllers.updateUserPassword
);

//DELETE/api/v1/users/profile/:id
userRouter.delete("/profile", isLogin, users.controllers.deleteUser);

//GET/api/v1/users/profile-viewers/id
userRouter.get(
  "/profile-viewers/:id",
  isLogin,
  users.controllers.whoViewMyProfile
);

//GET/api/v1/users/following/id
userRouter.get("/following/:id", isLogin, users.controllers.following);
//GET/api/v1/users/unfollowing/id
userRouter.get("/unfollowing/:id", isLogin, users.controllers.unfollowing);
//GET/api/v1/users/blocking/id

userRouter.get("/blocking/:id", isLogin, users.controllers.blockingUser);
//GET/api/v1/users/unblocking/id
userRouter.get("/unblocking/:id", isLogin, users.controllers.unblockingUser);
//PUT/api/v1/users/admin-block/id

userRouter.put(
  "/admin-block/:id",
  isLogin,
  isAdmin,
  users.controllers.adminBlockUser
);

//PUT/api/v1/users/admin-unblock/:id

userRouter.put(
  "/admin-unblock/:id",
  isLogin,
  isAdmin,
  users.controllers.adminUnblockUser
);

//DELETE/api/v1/users/admin-delete/:id

userRouter.delete(
  "/admin-delete/:id",
  isLogin,
  isAdmin,
  users.controllers.adminDeleteUser
);

//PUT/api/v1/users/admin-update-is-admin/:id

userRouter.put(
  "/admin-update-is-admin/:id",
  isLogin,
  isAdmin,
  users.controllers.adminUpdateRoleToIsAdmin
);

//PUT/api/v1/users/admin-update-is-not-admin/:id

userRouter.put(
  "/admin-update-is-not-admin/:id",
  isLogin,
  isAdmin,
  users.controllers.adminUpdateRoleToIsNotAdmin
);

//POST/api/v1/users/profile-photo-upload
userRouter.post(
  "/profile-photo-upload",
  isLogin,
  upload.single("profile"),
  users.controllers.uploadPhotoProfile
);
module.exports = userRouter;
