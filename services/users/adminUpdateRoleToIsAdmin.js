const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const adminUpdateRoleToIsAdmin = async (req, res, next) => {
  try {
    const userToUpdate = await User.findById(req.params.id);
    if (!userToUpdate) return next(errorHandler("user does not exist"));
    if (userToUpdate.isAdmin == true)
      return next(errorHandler("User is already an Admin "));
    userToUpdate.isAdmin = true;
    await userToUpdate.save();
    res.json({
      status: "success",
      data: `admin give the user the admin privilege with id :${req.params.id}`,
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = adminUpdateRoleToIsAdmin;
