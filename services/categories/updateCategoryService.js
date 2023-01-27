const Category = require("../../model/Category/Category.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const updateCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: " update Category",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = updateCategory;
