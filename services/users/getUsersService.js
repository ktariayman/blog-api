const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      return new (errorHandler("no users in the database", 400))();
    }
    res.json({
      status: "success",
      data: users,
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};
module.exports = getUsers;
