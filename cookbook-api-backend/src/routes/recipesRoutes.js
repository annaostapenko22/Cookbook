const express = require("express");
const {
  getRecipes,
  postRecipe,
  getRecipeById,
  updateRecipe,
  getOldRecipes,
  addOldRecipe
} = require("../controllers/recipesControllers");
const router = express.Router();

router.get("/recipes", getRecipes);
router.get("/recipes/:id", getRecipeById);

router.post("/recipes", postRecipe);
router.put("/recipes/:id", updateRecipe);

router.get("/recipes/old/:recipeId", getOldRecipes);
router.post("/recipes/old", addOldRecipe);

module.exports = router;
