const { errorHandler } = require("./errorHandler");

const getTokenFromHeader = (req, next) => {
  const header = req.headers;
  if (!header.authorization)
    return next(errorHandler("no token in the header", 500));
  const token = header["authorization"].split(" ")[1];
  if (!token) return false;
  return token;
};
module.exports = getTokenFromHeader;
