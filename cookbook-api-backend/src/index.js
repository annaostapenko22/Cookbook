const express = require("express");
const corsMiddleware = require("cors");
const notesRoutes = require("./notes/recipesRoutes");
const DataBase = require('./db');

const app = express();


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(express.json());
app.use(corsMiddleware(corsOptions));

app.use(notesRoutes);
DataBase.connect('localhost:27017', 'recipesdb');
app.listen(8080, () => {
  console.log("Server is running at port 8080");
});
