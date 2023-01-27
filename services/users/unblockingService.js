const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const unblockingUser = async (req, res, next) => {
  try {
    // user to be blocked
    const userToUnBlock = await User.findById(req.params.id);
    // user who is blocking
    const userWhoTryingToUnblock = await User.findById(req.userAuth);
    if (userWhoTryingToUnblock && userToUnBlock) {
      // verify is the user already exist in blocked arr
      const isUserAlreadyBlocked = userWhoTryingToUnblock.blocked.find(
        (blocked) => blocked.toString() === userToUnBlock._id.toString()
      );
      if (!isUserAlreadyBlocked) {
        return next(errorHandler("you have not blocked this profile"));
      }
      // push the userToBlock in the userWhoTryingToBlock's viewers

      userWhoTryingToUnblock.blocked = userWhoTryingToUnblock.blocked.filter(
        (blocked) => blocked.toString() !== userToUnBlock._id.toString()
      );
      // save in the database

      await userWhoTryingToUnblock.save();
      res.json({
        status: "success",
        data: " unblock User",
      });
    }
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = unblockingUser;
