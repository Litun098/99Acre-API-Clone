const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.mongoUrl || "mongodb://127.0.0.1:27017/99Acre_DB", {})
  .then(() => {
    console.log("Connected to mognoDB");
  })
  .catch((err) => {
    console.log("Couldn't connected to Database", err.message);
  });

// app.use(routes);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running at port", PORT);
});
