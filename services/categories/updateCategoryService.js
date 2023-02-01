const Category = require("../../model/Category/Category.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const updateCategory = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title)
      return next(
        errorHandler("there are no title to update the category", 400)
      );
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        title,
      },
      { new: true, runValidators: true }
    );
    res.json({
      status: "success",
      data: category,
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = updateCategory;
