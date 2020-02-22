const express = require("express");
const corsMiddleware = require("cors");

const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.use((req, res, next) => {
  console.log("inside");
  next();
});

app.use((req, res, next) => {
  console.log("inside22222");
});

const recipes = [
  {
    id: 1,
    name: "pizza",
    description:
      "Preheat the oven before starting to make the dough.Mix the flour, yeast, salt and sugar together in a mixing bowl. Make a well in the centre and add the oil, then add about 225ml water to bring together as a dough. Tip out onto a floured surface and knead for 1 minute, just until smooth. Leave to rest under the upturned bowl while you prepare your pizza toppings.Shape the pizzas (see tip), add your toppings and leave to rest for 10-15 minutes before baking, so that the dough starts to rise."
  },
  {
      id: 2,
      name: "pancake",
      description: "Cut the bananas diagonally into 1.5cm slices. Melt the butter and sugar together in a medium saucepan. Stir until smooth then add the banana slices and cook for 3-4 minutes. Gently stir in the rum, salt and double cream. Serve the boozy bananas and sauce with warm crêpes and a scoop of vanilla ice cream."
  }
];

app.get("/recipes", (req, res, next) => {
  res.status(200).json(recipes);
});

app.listen(8080, () => {
  console.log("Server is running at port 8080");
});
