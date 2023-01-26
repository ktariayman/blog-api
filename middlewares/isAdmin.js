const User = require("../model/User/User.model");
const { errorHandler } = require("../utils/ErrorHandler");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");
const isAdmin = async (req, res, next) => {
  const token = getTokenFromHeader(req);
  const decodedUser = verifyToken(token);
  req.userAuth = decodedUser.id;

  // find the user in db
  const user = await User.findById(decodedUser.id);
  if (user.isAdmin) {
    return next();
  } else {
    return next(errorHandler("You have no access ", 403));
  }
};

module.exports = isAdmin;
