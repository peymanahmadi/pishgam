const express = require("express");

const thingsRoutes = require("./routes/things-routes");

const app = express();

app.use("/api/v1/things", thingsRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(5000);
