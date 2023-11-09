const express = require("express");
const {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe
} = require("./controllers");
const router = express.Router();

router.get("/", getAllRecipes);
router.get("/:id",  getOneRecipe);
router.post("/",createRecipe);
router.delete("/:id",deleteRecipe);
 router.put("/:id", updateRecipe);

module.exports = router;
