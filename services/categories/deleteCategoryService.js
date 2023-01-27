const Category = require("../../model/Category/Category.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const deleteCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "delete Category",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = deleteCategory;
