const User = require("../../model/User/User.model");
const { ErrorHandler, errorHandler } = require("../../utils/errorHandler");

const unfollowing = async (req, res, next) => {
  try {
    const userToUnfollow = await User.findById(req.params.id);
    const userWhoUnfollowedTheProile = await User.findById(req.userAuth);
    if (userToUnfollow && userWhoUnfollowedTheProile) {
      const isUserAlreadyFollowed = userToUnfollow.followers.find(
        (follower) =>
          follower.toString() === userWhoUnfollowedTheProile._id.toString()
      );
      if (!isUserAlreadyFollowed) {
        return next(errorHandler("you are not following this profile"));
      } else {
        // push the userWhoViewedTheProfile in the user's viewers
        userToUnfollow.followers = userToUnfollow.followers.filter(
          (f) => f.toString() !== userWhoUnfollowedTheProile._id.toString()
        );
        userWhoUnfollowedTheProile.following =
          userWhoUnfollowedTheProile.following.filter(
            (f) => f.toString() !== userToUnfollow._id.toString()
          );

        // save in the database
        await userToUnfollow.save();
        await userWhoUnfollowedTheProile.save();
        res.json({
          status: "success",
          data: "you have successfully unfollowed the profile",
        });
      }
    }

    res.json({
      status: "success",
      data: "unfollow",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = unfollowing;
