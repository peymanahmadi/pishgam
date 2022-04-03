const express = require("express");
const mongoose = require("mongoose");

const thingsRoutes = require("./routes/things-routes");
const usersRoutes = require("./routes/users-routes");
const categoriesRoutes = require("./routes/categories-routes");
const thingRoutes = require("./routes/thing-route");
const HttpError = require("./models/http-error");

const app = express();

app.use(express.json());

app.use("/api/v1/things", thingsRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/thing", thingRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

mongoose
  .connect("mongodb://localhost:27017/pishgam")
  // .connect(
  //   "mongodb+srv://peyman:Qq12345@cluster0.3wfo1.mongodb.net/pishgam?retryWrites=true&w=majority"
  // )
  // .connect(
  //   "mongodb+srv://peyman:Qq12345%21@cluster0.3wfo1.mongodb.net/Pishgam?replicaSet=atlas-ge36gy-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1"
  // )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
