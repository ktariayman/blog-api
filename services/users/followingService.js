const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const following = async (req, res, next) => {
  try {
    // find the original user

    const userToFollow = await User.findById(req.params.id);
    // find the  user who viewed the original user
    const userWhoFollowedTheProile = await User.findById(req.userAuth);
    if (userToFollow && userWhoFollowedTheProile) {
      const isUserAlreadyFollowed = userToFollow.followers.find(
        (follower) =>
          follower.toString() === userWhoFollowedTheProile._id.toJSON()
      );
      if (isUserAlreadyFollowed) {
        return next(errorHandler("you already followed this profile"));
      } else {
        // push the userWhoViewedTheProfile in the user's viewers
        userToFollow.followers.push(userWhoFollowedTheProile._id);
        userWhoFollowedTheProile.following.push(userToFollow._id);
        // save in the database
        await userWhoFollowedTheProile.save();
        await userToFollow.save();
        res.json({
          status: "success",
          data: "you have successfully followed the profile",
        });
      }
    }
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = following;
