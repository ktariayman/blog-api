const userRegister = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user registered",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const userLogin = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user login",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "profile",
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
