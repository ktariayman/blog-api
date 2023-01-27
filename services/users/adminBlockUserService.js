const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const adminBlockUser = async (req, res, next) => {
  try {
    const userToBlock = await User.findById(req.params.id);
    if (!userToBlock) {
      return next(errorHandler("User not found"));
    }
    if (userToBlock.isBlocked == true)
      return next(errorHandler("User is already blocked "));
    userToBlock.isBlocked = true;
    await userToBlock.save();
    res.json({
      status: "success",
      data: "admin block user ",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};
module.exports = adminBlockUser;
