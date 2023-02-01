const User = require("../../model/User/User.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const adminUpdateRoleToIsNotAdmin = async (req, res, next) => {
  try {
    const userToUpdate = await User.findById(req.params.id);
    if (!userToUpdate) return next(errorHandler("user does not exist"));
    if (userToUpdate.isAdmin == false)
      return next(errorHandler("User is already not an Admin "));
    userToUpdate.isAdmin = false;
    await userToUpdate.save();
    res.json({
      status: "success",
      data: `admin delete from the user with id :${req.params.id} the admin privilege `,
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = adminUpdateRoleToIsNotAdmin;
