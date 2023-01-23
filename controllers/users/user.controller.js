const User = require("../../model/User/User.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const userRegister = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({
        status: "failed",
        data: "user already exist",
      });
    }

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
    res.json(error.message);
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.json({
        status: "success",
        data: "Wrong credentials",
      });
    }
    const passwordMatch = await bcrypt.compare(password, userExist.password);
    if (!passwordMatch) {
      return res.json({
        status: "success",
        data: "Wrong credentials",
      });
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
    res.json(error.message);
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
    res.json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user updateprofile",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete profile",
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { userRegister, userLogin, getUser, updateUser, deleteUser };
