const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");
const bcrypt = require("bcryptjs");
const updateUserPassword = async (req, res, next) => {
  try {
    if (!req.body.password) {
      return next(new ErrorHandler("please write a password ", 500));
    }
    const user = await User.findById(req.userAuth);
    const isTheSamePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (isTheSamePassword) {
      return next(new ErrorHandler("You have to update the password !! ", 500));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const userUpdated = await User.findByIdAndUpdate(
      req.userAuth,
      {
        password: hashedPassword,
      },
      { new: true, runValidators: true }
    );

    res.json({
      status: "success",
      data: "user's password is updated successfully",
      // data: userUpdated,
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = updateUserPassword;
