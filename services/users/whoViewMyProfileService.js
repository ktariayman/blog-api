const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const whoViewMyProfile = async (req, res, next) => {
  try {
    // find the original user

    const user = await User.findById(req.params.id);
    // find the  user who viewed the original user
    const userWhoViewedTheProfile = await User.findById(req.userAuth);
    if (user && userWhoViewedTheProfile) {
      // check if the userWhoViewedTheProfile exists in viewers array
      const isUserAlreadyViewed = user.viewers.find(
        (viewer) => viewer.toString() === userWhoViewedTheProfile._id.toJSON()
      );
      if (isUserAlreadyViewed) {
        return next(errorHandler("you already viewed this profile"));
      } else {
        // push the userWhoViewedTheProfile in the user's viewers
        user.viewers.push(userWhoViewedTheProfile._id);
        // save in the database
        await user.save();
        res.json({
          status: "success",
          data: "you have successfully viewed the profile",
        });
      }
    }
  } catch (error) {
    next(ErrorHandler(error.message));
  }
};

module.exports = whoViewMyProfile;
