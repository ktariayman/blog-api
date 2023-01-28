const User = require("../../model/User/User.model");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const getUser = async (req, res, next) => {
  try {
    const token = getTokenFromHeader(req);
    console.log(token);
    const user = await User.findById(req.userAuth);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = getUser;
