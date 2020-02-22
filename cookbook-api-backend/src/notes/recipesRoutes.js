const express = require("express");
const { getRecipes, postRecipe, getRecipeById, updateRecipe } = require("./recipesControllers");
const router = express.Router();

router.get("/api/recipes", getRecipes);
router.get("/api/recipe/:id", getRecipeById)

router.post("/api/recipes", postRecipe);
router.put("/api/recipes/:id", updateRecipe)
module.exports = router;
