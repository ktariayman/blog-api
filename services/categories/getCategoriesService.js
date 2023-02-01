const Category = require("../../model/Category/Category.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return next(errorHandler("there are no categories ", 400));
    }
    res.json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = getCategories;
