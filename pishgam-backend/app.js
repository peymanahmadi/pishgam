const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");

// db and authenticateUser
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/authRoutes");

const thingsRoutes = require("./routes/things-routes");
const usersRoutes = require("./routes/users-routes");
const categoriesRoutes = require("./routes/categories-routes");
const thingRoutes = require("./routes/thing-route");
const HttpError = require("./models/http-error");

// middleware

const errorHandlerMiddleware = require("./middleware/error-handler");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });
app.use(cors());

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/things", thingsRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/thing", thingRoutes);

app.use((req, res, next) => {
  console.log(req.url);
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use(errorHandlerMiddleware);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

const port = process.env.PORT || 4475;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
