const mongoose = require('mongoose');
const {recipeSchema} = require('./RecipeDbModel');

const oldRecipeSchema = recipeSchema({refRecipeId: String});

module.exports = mongoose.model('OldRecipe', oldRecipeSchema);