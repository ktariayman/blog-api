const User = require("../../model/User/User.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (!userExist)
      return next(new ErrorHandler("Invalid Login credentials ", 500));

    const passwordMatch = await bcrypt.compare(password, userExist.password);
    if (!passwordMatch) {
      if (!userExist)
        return next(new ErrorHandler("Invalid Login credentials ", 500));
    }
    res.json({
      status: "success",
      data: {
        firstname: userExist.firstname,
        lastname: userExist.lastname,
        email: userExist.email,
        isAdmin: userExist.isAdmin,
        token: generateToken(userExist._id),
      },
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = userLogin;
