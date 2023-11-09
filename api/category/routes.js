const express = require("express");
const {
  getAllCategories,
  getOneCategory,
  createCategory,
  deleteCategory,
  updateCategory
} = require("./controllers");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id",  getOneCategory);
router.post("/",createCategory);
router.delete("/:id",deleteCategory);
 router.put("/:id", updateCategory);

module.exports = router;
