const express = require("express");
const mongoose = require("mongoose");

const thingsRoutes = require("./routes/things-routes");
const usersRoutes = require("./routes/users-routes");
const categoriesRoutes = require("./routes/categories-routes");
const thingRoutes = require("./routes/thing-route");
const HttpError = require("./models/http-error");

//
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const cors = require("cors");
const server = http.createServer(app);
app.use(cors);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_message", data);
  });
});

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use((req, res, next) => {
  res.io = io;
  next();
});

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
  .connect(
    "mongodb://thingsso_user:881510066Arm@thingssolution.com:27017/thingsso_db"
  )
  .then(() => {
    server.listen(4475, () => {
      console.log("successfully conntected to mongodb");
    });
  })
  // .then(() => {
  //   app.listen(4475, () => {
  //     console.log("successfully conntected to mongodb");
  //   });
  // })
  .catch((err) => {
    console.log(err);
  });
