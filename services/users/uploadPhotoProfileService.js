const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const uploadPhotoProfile = async (req, res, next) => {
  console.log(req.file);
  try {
    // find user to be uploaded
    const userToUpdate = await User.findById(req.userAuth);
    // check if user if found
    if (!userToUpdate) {
      return next(errorHandler("user not found", 403));
    }
    // check if user if blocked
    if (userToUpdate.isBlocked) {
      return next(
        errorHandler("Action not allowed, your account is blocked", 403)
      );
    }
    //check if a user is updating their photo
    if (req.file) {
      await User.findByIdAndUpdate(
        req.userAuth,
        {
          $set: {
            profilePhoto: req.file.path,
          },
        },
        {
          new: true,
        }
      );
    }
    // updare profile photo
    res.json({
      status: "success",
      data: "profil photo updated successfully",
    });
  } catch (error) {
    next(errorHandler(error.message, 500));
  }
};
module.exports = uploadPhotoProfile;
