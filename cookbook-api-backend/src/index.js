const express = require("express");
const corsMiddleware = require("cors");
const notesRoutes = require("./notes/recipesRoutes");

const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.use(notesRoutes);

app.listen(8080, () => {
  console.log("Server is running at port 8080");
});
