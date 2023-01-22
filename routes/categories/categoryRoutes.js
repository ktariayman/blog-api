const express = require("express");
const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../../controllers/categories/categories.controller");

const categoryRouter = express.Router();

//POST/api/v1/categories
categoryRouter.post("/", createCategory);

//GET/api/v1/categories/:id
categoryRouter.get("/:id", getCategory);

//PUT/api/v1/categories/:id
categoryRouter.put("/:id", updateCategory);

//DELETE/api/v1/categories/:id
categoryRouter.delete("/:id", deleteCategory);

module.exports = categoryRouter;
