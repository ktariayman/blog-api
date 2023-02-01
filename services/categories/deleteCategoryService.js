const Category = require("../../model/Category/Category.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      data: "delete Category successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = deleteCategory;
