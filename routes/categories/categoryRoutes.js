const express = require("express");
const categories = require("../../controllers/categories/categoriesController");
const categoryRouter = express.Router();

//POST/api/v1/categories
categoryRouter.post("/", categories.controllers.createCategory);

//GET/api/v1/categories/:id
categoryRouter.get("/:id", categories.controllers.getCategory);

//PUT/api/v1/categories/:id
categoryRouter.put("/:id", categories.controllers.updateCategory);

//DELETE/api/v1/categories/:id
categoryRouter.delete("/:id", categories.controllers.deleteCategory);

module.exports = categoryRouter;
