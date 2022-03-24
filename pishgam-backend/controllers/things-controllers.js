const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const Thing = require("../models/thing");
const User = require("../models/user");
const Category = require("../models/category");
const HttpError = require("../models/http-error");

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

  let things;
  try {
    things = await Thing.find({ users: userID });
  } catch (err) {
    const error = new HttpError(
      "Fetching things failed, please try again later",
      500
    );
    return next(error);
  }

  if (!things || things.length === 0) {
    return next(
      new HttpError("Could not find things for the provided user id.", 404)
    );
  }

  res.json({
    things: things.map((thing) => thing.toObject({ getters: true })),
  });
};

const createThing = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const {
    colName,
    title,
    description,
    apiWriteKey,
    apiReadKey,
    enabled,
    dataLifeCycle,
    creator,
  } = req.body;

  const createdThing = new Thing({
    colName,
    title,
    description,
    categories: [],
    apiWriteKey,
    apiReadKey,
    enabled,
    dataLifeCycle,
    creator,
    users: [],
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

  res.status(201).json({ thing: createdThing });
};

const updateThing = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description, categories, enabled, users } = req.body;
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
  const tid = req.params.tid;

  let thing;
  try {
    thing = await Thing.findById(tid);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete thing.",
      500
    );
    return next(error);
  }

  try {
    await thing.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete thing.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted thing." });
};

exports.getThingByID = getThingByID;
exports.getThingsByUserID = getThingsByUserID;
exports.createThing = createThing;
exports.updateThing = updateThing;
exports.deleteThing = deleteThing;
