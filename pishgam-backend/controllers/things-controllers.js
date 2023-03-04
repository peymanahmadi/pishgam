const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { validationResult } = require("express-validator");
const Thing = require("../models/thing");
const User = require("../models/User");
const Category = require("../models/category");
const HttpError = require("../models/http-error");
const thing = require("../models/thing");

const getThings = async (req, res, next) => {
  let things;
  try {
    things = await Thing.find({});
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find things",
      500
    );
    return next(error);
  }

  res.json({
    things: things.map((thing) => thing.toObject({ getters: true })),
  });
};

const getThingByID = async (req, res, next) => {
  const thingID = req.params.tid;

  let thing;
  try {
    thing = await Thing.findById(thingID);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a thing",
      500
    );
    return next(error);
  }

  if (!thing) {
    const error = new HttpError(
      "Could not find a thing for the provided ID",
      404
    );
    return next(error);
  }

  res.json({ thing: thing.toObject({ getters: true }) });
};

const getThingsByUserID = async (req, res, next) => {
  const userID = req.params.uid;

  let userWithThings;
  try {
    userWithThings = await User.findById(userID).populate("things");
  } catch (err) {
    const error = new HttpError(
      "Fetching things failed, please try again later",
      500
    );
    return next(error);
  }

  if (!userWithThings || userWithThings.length === 0) {
    return next(
      new HttpError("Could not find things for the provided user id.", 404)
    );
  }

  res.json({
    things: userWithThings.things.map((thing) =>
      thing.toObject({ getters: true })
    ),
  });
};

const createThing = async (req, res, next) => {
  console.log("Start to create");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { colName, title, description, enabled, creator } = req.body;

  const createdThing = new Thing({
    colName,
    title,
    description,
    apiWriteKey: uuidv4(),
    apiReadKey: uuidv4(),
    enabled,
    creator,
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError("Creating thing failed, please try again", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id", 404);
    return next(error);
  }

  createdThing.users = creator;

  try {
    await createdThing.save();
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdThing.save({ sesseion: sess });
    user.things.push(createdThing);
    await user.save({ session: sess });
    sess.commitTransaction();
  } catch (err) {
    // const error = new HttpError("Creating thing failed, please try again", 500);
    const error = new HttpError(err, 500);
    return next(error);
  }

  console.log(createdThing);

  res.status(201).json({ thing: createdThing });
};

const updateThing = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description, categories, enabled, users, colName } = req.body;
  const tid = req.params.tid;

  let thing;
  try {
    thing = await Thing.findById(tid);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update thing.",
      500
    );
    return next(error);
  }

  thing.title = title;
  thing.description = description;
  thing.categories = categories;
  thing.enabled = enabled;
  thing.users = users;
  thing.colName = colName;

  try {
    thing = await thing.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update thing.",
      500
    );
    return next(error);
  }

  res.status(200).json({ thing: thing.toObject({ getters: true }) });
};

const deleteThing = async (req, res, next) => {
  const thingID = req.params.tid;

  let thing;
  try {
    thing = await Thing.findById(thingID);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete thing. " + err + " ",
      500
    );
    return next(error);
  }

  console.log(thing);
  console.log("------------");

  if (!thing) {
    const error = new HttpError("Could not find thing for this id.", 404);
    return next(error);
  }

  try {
    // const session = await Thing.startSession();
    // await session.withTransaction(() => {
    //   return Thing.findByIdAndDelete(thingID, { session: session });
    // });

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await thing.remove({ session: sess });
    thing.users.things.pull(thing);
    await thing.users.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete thing. " + err + " ",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted thing." });
};

const setThingValue = async (req, res, next) => {
  console.log(req.query.tid);
  let title = req.query.title;
  let value = req.query.value;

  const thingModel = mongoose.model(
    title,
    new mongoose.Schema({
      value: Number,
      setAt: { type: Date, default: Date.now() },
    })
  );

  const thingData = new thingModel();
  thingData.value = value;

  let thingValue;
  try {
    thingValue = await thingData.save();
  } catch (err) {
    const error = new HttpError(err, 500);
    return next(error);
  }

  res.json({
    title,
    value,
  });
};

exports.getThings = getThings;
exports.getThingByID = getThingByID;
exports.getThingsByUserID = getThingsByUserID;
exports.createThing = createThing;
exports.updateThing = updateThing;
exports.deleteThing = deleteThing;

exports.setThingValue = setThingValue;
