const moment = require("moment");
require("moment/locale/uk");

const RecipeModel = require("../models/RecipeDbModel");
const OldRecipeModel = require("../models/OldRecipeDbModel");

// const recipes = [
//   {
//     id: 1,
//     name: "pizza",
//     description:
//       "Preheat the oven before starting to make the dough.Mix the flour, yeast, salt and sugar together in a mixing bowl. Make a well in the centre and add the oil, then add about 225ml water to bring together as a dough. Tip out onto a floured surface and knead for 1 minute, just until smooth. Leave to rest under the upturned bowl while you prepare your pizza toppings.Shape the pizzas (see tip), add your toppings and leave to rest for 10-15 minutes before baking, so that the dough starts to rise.",
//       isActive: true
//   },
//   {
//     id: 2,
//     name: "pancake",
//     description:
//       "Cut the bananas diagonally into 1.5cm slices. Melt the butter and sugar together in a medium saucepan. Stir until smooth then add the banana slices and cook for 3-4 minutes. Gently stir in the rum, salt and double cream. Serve the boozy bananas and sauce with warm crêpes and a scoop of vanilla ice cream.",
//   isActive: true
//     }
// ];

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
