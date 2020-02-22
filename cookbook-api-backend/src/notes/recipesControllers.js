const recipes = [
  {
    id: 1,
    name: "pizza",
    description:
      "Preheat the oven before starting to make the dough.Mix the flour, yeast, salt and sugar together in a mixing bowl. Make a well in the centre and add the oil, then add about 225ml water to bring together as a dough. Tip out onto a floured surface and knead for 1 minute, just until smooth. Leave to rest under the upturned bowl while you prepare your pizza toppings.Shape the pizzas (see tip), add your toppings and leave to rest for 10-15 minutes before baking, so that the dough starts to rise.",
      isActive: true
  },
  {
    id: 2,
    name: "pancake",
    description:
      "Cut the bananas diagonally into 1.5cm slices. Melt the butter and sugar together in a medium saucepan. Stir until smooth then add the banana slices and cook for 3-4 minutes. Gently stir in the rum, salt and double cream. Serve the boozy bananas and sauce with warm crêpes and a scoop of vanilla ice cream.",
  isActive: true
    }
];

const getRecipes = (req, res, next) => {
  res.status(200).json(recipes);
};

// !!!!!!!!!
const getRecipeById = (req, res, next) => {
  const foundRecipe = recipes.find(r=> r.id === Number(req.params.id))

    res.status(200).json(foundRecipe)
 
  
};

const postRecipe = (req, res, next) => {
  console.log(req.body);

  const recipe = {
    id: Date.now(),
    ...req.body
  };
  recipes.push(recipe);
  res.status(201).json(recipe);
};

// !!!!!!!!
const oldRecipes = {}

const updateRecipe = (req, res, next) => {
  const foundRecipe = recipes.find(r => r.id === Number(req.params.id));
  console.log("found", foundRecipe);
  if(foundRecipe) {
    if(oldRecipes[foundRecipe.id]){
      oldRecipes[foundRecipe.id].push(foundRecipe)
    }else {
      oldRecipes[foundRecipe.id] = [foundRecipe]
    }

    const recipe = {
      ...foundRecipe,
      ...req.body
    }
    res.status(201).json(recipe);
  }

};

module.exports = { getRecipes, postRecipe, getRecipeById, updateRecipe };
