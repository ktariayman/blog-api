const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const updateUser = async (req, res, next) => {
  try {
    const { email, lastname, firstname } = req.body;
    if (email) {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) return next(errorHandler("Email is taken", 400));
    }
    const user = await User.findByIdAndUpdate(
      req.userAuth,
      {
        lastname,
        firstname,
        email,
      },
      { new: true, runValidators: true }
    );
    res.json({
      status: "success",
      data: "user is updated successfully",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = updateUser;
