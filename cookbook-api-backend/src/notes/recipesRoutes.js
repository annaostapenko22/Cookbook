const express = require("express");
const { getRecipes, postRecipe } = require("./recipesControllers");
const router = express.Router();

router.get("/", getRecipes);

router.post("/", postRecipe);

module.exports = router;
