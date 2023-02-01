const express = require("express");
const categories = require("../../controllers/categories/categoriesController");
const categoryRouter = express.Router();
const isLogin = require("../../middlewares/isLogin");
//POST/api/v1/categories
categoryRouter.post("/", isLogin, categories.controllers.createCategory);

//GET/api/v1/categories/:id
categoryRouter.get("/:id", isLogin, categories.controllers.getCategory);

//GET/api/v1/categories
categoryRouter.get("/", isLogin, categories.controllers.getCategories);

//PUT/api/v1/categories/:id
categoryRouter.put("/:id", isLogin, categories.controllers.updateCategory);

//DELETE/api/v1/categories/:id
categoryRouter.delete("/:id", isLogin, categories.controllers.deleteCategory);

module.exports = categoryRouter;
