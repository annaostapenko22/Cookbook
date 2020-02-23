const express = require("express");
const {
  getRecipes,
  postRecipe,
  getRecipeById,
  updateRecipe,
  getOldRecipes,
  addOldRecipe
} = require("./recipesControllers");
const router = express.Router();

router.get("/api/recipes", getRecipes);
router.get("/api/recipes/:id", getRecipeById);

router.post("/api/recipes", postRecipe);
router.put("/api/recipes/:id", updateRecipe);

router.get("/api/recipes/old/:recipeId", getOldRecipes);
router.post("/api/recipes/old", addOldRecipe);
module.exports = router;
