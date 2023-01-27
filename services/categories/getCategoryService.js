const Category = require("../../model/Category/Category.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const getCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: " get Category",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = getCategory;
