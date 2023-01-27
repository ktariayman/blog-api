const Category = require("../../model/Category/Category.model");
const { errorHandler } = require("../../utils/ErrorHandler");

const createCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "create Category",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = createCategory;
