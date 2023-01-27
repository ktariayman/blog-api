const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const deleteUser = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "user delete profile",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = deleteUser;
