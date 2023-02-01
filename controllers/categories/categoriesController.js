const createCategory = require("../../services/categories/createCategoryService");
const getCategory = require("../../services/categories/getCategoryService");
const getCategories = require("../../services/categories/getCategoriesService");
const updateCategory = require("../../services/categories/updateCategoryService");
const deleteCategory = require("../../services/categories/deleteCategoryService");

exports.controllers = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getCategories,
};
