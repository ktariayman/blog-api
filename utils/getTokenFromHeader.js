const getTokenFromHeader = (req) => {
  const header = req.headers;
  const token = header["authorization"].split(" ")[1];
  if (!token) return false;
  return token;
};
module.exports = getTokenFromHeader;
