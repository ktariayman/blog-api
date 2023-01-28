const { errorHandler } = require("../utils/ErrorHandler");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");
const isLogin = (req, res, next) => {
  const token = getTokenFromHeader(req, next);
  const decodedUser = verifyToken(token);
  req.userAuth = decodedUser.id;
  if (!decodedUser) {
    return next(errorHandler("no/invalid token , please login", 500));
  } else {
    next();
  }
};

module.exports = isLogin;
