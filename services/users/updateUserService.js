const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const updateUser = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "user updateprofile",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = updateUser;
