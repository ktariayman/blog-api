const User = require("../../model/User/User.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const { ErrorHandler, errorHandler } = require("../../utils/ErrorHandler");
const userRegister = async (req, res) => {
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

const userLogin = async (req, res) => {
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

const getUser = async (req, res) => {
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

const updateUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user updateprofile",
    });
  } catch (error) {
    next(errorHandler(error.message));
  }
};

const uploadPhotoProfile = async (req, res) => {
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
const deleteUser = async (req, res) => {
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
};
