const User = require("../../model/User/User.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const { ErrorHandler, errorHandler } = require("../../utils/ErrorHandler");

const userRegister = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return next(new ErrorHandler("user already exist", 500));

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    // create the user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedpassword,
    });
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

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
    next(errorHandler(error.message));
  }
};
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

const blockingUser = async (req, res, next) => {
  try {
    // user to be blocked
    const userToBlock = await User.findById(req.params.id);
    // user who is blocking
    const userWhoTryingToBlock = await User.findById(req.userAuth);
    if (userWhoTryingToBlock && userToBlock) {
      // verify is the user already exist in blocked arr
      const isUserAlreadyBlocked = userWhoTryingToBlock.blocked.find(
        (blocked) => blocked.toString() === userToBlock._id.toString()
      );
      if (isUserAlreadyBlocked) {
        return next(errorHandler("you have already blocked this profile"));
      }
      // push the userToBlock in the userWhoTryingToBlock's viewers

      userWhoTryingToBlock.blocked.push(userToBlock._id);
      // save in the database

      await userWhoTryingToBlock.save();
      res.json({
        status: "success",
        data: " block User",
      });
    }
  } catch (error) {
    next(errorHandler(error.message));
  }
};

const unblockingUser = async (req, res, next) => {
  try {
    // user to be blocked
    const userToUnBlock = await User.findById(req.params.id);
    // user who is blocking
    const userWhoTryingToUnblock = await User.findById(req.userAuth);
    if (userWhoTryingToUnblock && userToUnBlock) {
      // verify is the user already exist in blocked arr
      const isUserAlreadyBlocked = userWhoTryingToUnblock.blocked.find(
        (blocked) => blocked.toString() === userToUnBlock._id.toString()
      );
      if (!isUserAlreadyBlocked) {
        return next(errorHandler("you have not blocked this profile"));
      }
      // push the userToBlock in the userWhoTryingToBlock's viewers

      userWhoTryingToUnblock.blocked = userWhoTryingToUnblock.blocked.filter(
        (blocked) => blocked.toString() !== userToUnBlock._id.toString()
      );
      // save in the database

      await userWhoTryingToUnblock.save();
      res.json({
        status: "success",
        data: " unblock User",
      });
    }
  } catch (error) {
    next(errorHandler(error.message));
  }
};
const getUser = async (req, res, next) => {
  try {
    const token = getTokenFromHeader(req);
    console.log(token);
    const user = await User.findById(req.userAuth);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

const updateUser = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "user updateprofile",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

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
const deleteUser = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "user delete profile",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

module.exports = {
  userRegister,
  userLogin,
  getUser,
  updateUser,
  deleteUser,
  uploadPhotoProfile,
  whoViewMyProfile,
  following,
  unfollowing,
  blockingUser,
  unblockingUser,
};
