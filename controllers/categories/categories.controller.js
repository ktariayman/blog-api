const createCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "category created",
    });
  } catch (error) {
    res.json(error.message);
  }
};
const getCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "one category",
    });
  } catch (error) {
    res.json(error.message);
  }
};
const updateCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user update category",
    });
  } catch (error) {
    res.json(error.message);
  }
};
const deleteCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete category",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
