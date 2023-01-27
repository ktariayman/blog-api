const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const blockingUser = async (req, res, next) => {
  try {
    // user to be blocked
    const userToBlock = await User.findById(req.params.id);
    // user who is blocking
    const userWhoTryingToBlock = await User.findById(req.userAuth);
    if (userWhoTryingToBlock && userToBlock) {
      // verify is the user already exist in blocked arr
      const isUserAlreadyBlocked = userWhoTryingToBlock.blocked.find(
        (blocked) => blocked.toString() === userToBlock._id.toString()
      );
      if (isUserAlreadyBlocked) {
        return next(errorHandler("you have already blocked this profile"));
      }
      // push the userToBlock in the userWhoTryingToBlock's viewers

      userWhoTryingToBlock.blocked.push(userToBlock._id);
      // save in the database

      await userWhoTryingToBlock.save();
      res.json({
        status: "success",
        data: " block User",
      });
    }
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = blockingUser;
