const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const adminUnblockUser = async (req, res, next) => {
  try {
    const userToUnblock = await User.findById(req.params.id);
    if (!userToUnblock) {
      return next(errorHandler("User not found"));
    }
    if (userToUnblock.isBlocked == false)
      return next(errorHandler("User is not blocked "));
    userToUnblock.isBlocked = false;
    await userToUnblock.save();
    res.json({
      status: "success",
      data: "admin block user ",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};
module.exports = adminUnblockUser;
