const moment = require("moment");
require("moment/locale/uk");

const RecipeModel = require("../models/RecipeDbModel");
const OldRecipeModel = require("../models/OldRecipeDbModel");


const getRecipes = (req, res) => {
  RecipeModel.find({
    isActive: true
  })
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
    });
};

const getRecipeById = (req, res) => {
  const id = req.params.id;

  RecipeModel.findOne({
    _id: id,
    isActive: true
  })
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
};

const postRecipe = (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  }

  const recipe = new RecipeModel({
    isActive: true,
    creationDate: moment().utc(),
    ...req.body
  });
  recipe
    .save()
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
};

const updateRecipe = (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  }
  const id = req.params.id;

  RecipeModel.findOneAndUpdate(
    {
      _id: id,
      isActive: true
    },
    {
      ...req.body
    },
    {
      new: true,
      runValidators: true
    }
  )
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
};

const getOldRecipes = (req, res) => {
  const recipeId = req.params.recipeId;

  OldRecipeModel.findOneAndUpdate({
    refRecipeId: recipeId,
    isActive: true
  })
    .then(oldRecipes => {
      res.status(200).json(oldRecipes);
    })
    .catch(err => {
      console.log(err);
    });
};

const addOldRecipe = (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  }
  const oldRecipe = new OldRecipeModel({ ...req.body });

  oldRecipe
    .save()
    .then(oldRecipe => {
      res.status(201).json(oldRecipe);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  getRecipes,
  postRecipe,
  getRecipeById,
  updateRecipe,
  getOldRecipes,
  addOldRecipe
};
