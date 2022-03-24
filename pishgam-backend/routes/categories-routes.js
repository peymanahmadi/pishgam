const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const categoriesControllers = require("../controllers/categories-controllers");

router.get("/", categoriesControllers.getCategories);
router.get("/:cid", categoriesControllers.getCategoryByID);
router.get("/user/:uid", categoriesControllers.getCategoryByUserID);
router.post(
  "/",
  check("title").not().isEmpty(),
  categoriesControllers.createCategory
);
router.patch("/:cid", categoriesControllers.updateCategory);
router.delete("/:cid", categoriesControllers.deleteCategory);

module.exports = router;
