const Category = require("../../model/Category/Category.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const createCategory = async (req, res, next) => {
  const { title } = req.body;
  try {
    if (!title)
      return next(
        errorHandler("there are no title to create the category", 400)
      );
    const category = await Category.create({ title, user: req.userAuth });
    res.json({
      status: "success",
      data: category,
    });
  } catch (error) {
    return next(errorHandler(error.message));
  }
};
module.exports = createCategory;
