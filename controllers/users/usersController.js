const userLogin = require("../../services/users/loginService");
const userRegister = require("../../services/users/registerService");
const whoViewMyProfile = require("../../services/users/whoViewMyProfileService");
const getUser = require("../../services/users/getUserService");
const getUsers = require("../../services/users/getUsersService");
const blockingUser = require("../../services/users/blockingService");
const unblockingUser = require("../../services/users/unblockingService");
const following = require("../../services/users/followingService");
const unfollowing = require("../../services/users/unFollowingService");
const adminBlockUser = require("../../services/users/adminBlockUserService");
const adminUnblockUser = require("../../services/users/adminUnblockUserService");
const uploadPhotoProfile = require("../../services/users/uploadPhotoProfileService");
const updateUser = require("../../services/users/updateUserService");
const updateUserPassword = require("../../services/users/updateUserPasswordService");
const deleteUser = require("../../services/users/deleteUserService");

exports.controllers = {
  userLogin,
  userRegister,
  getUser,
  getUsers,
  updateUser,
  updateUserPassword,
  deleteUser,
  whoViewMyProfile,
  blockingUser,
  unblockingUser,
  adminBlockUser,
  following,
  adminUnblockUser,
  unfollowing,
  uploadPhotoProfile,
};
