const { validationResult } = require("express-validator");
const Thing = require("../models/thing");
const HttpError = require("../models/http-error");

const DUMMY_THINGS = [
  {
    id: "1",
    colName: "thing202203001",
    title: "Silo 1",
    creatorID: "u1",
    userID: ["u1", "u2"],
  },
];

const getThingByID = (req, res, next) => {
  const thingID = req.params.tid;
  const thing = DUMMY_THINGS.find((t) => {
    return t.id === thingID;
  });

  if (!thing) {
    return next(
      new HttpError("Could not find a thing for the provided ID", 404)
    );
  }

  res.json({ thing });
};

const getThingsByUserID = (req, res, next) => {
  const userID = req.params.uid;
  const things = DUMMY_THINGS.filter((t) => (t.userID = userID));

  if (!things || things.length === 0) {
    return next(
      new HttpError("Could not find things for the provided user id.", 404)
    );
  }

  res.json({ things });
};

const createThing = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const {
    colName,
    title,
    description,
    categoryID,
    apiWriteKey,
    apiReadKey,
    enabled,
    dataLifeCycle,
    creator,
    users,
  } = req.body;

  const createdThing = new Thing({
    colName,
    title,
    description,
    categoryID,
    apiWriteKey,
    apiReadKey,
    enabled,
    dataLifeCycle,
    creator,
    users,
  });

  try {
    await createdThing.save();
  } catch (err) {
    // const error = new HttpError("Creating thing failed, please try again", 500);
    const error = new HttpError(err, 500);
    return next(error);
  }

  res.status(201).json({ thing: createdThing });
};

const updateThing = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { title } = req.body;
  const tid = req.params.tid;

  const updatedThing = { ...DUMMY_THINGS.find((t) => t.id === tid) };
  const thingIndex = DUMMY_THINGS.findIndex((t) => t.id === tid);
  updateThing.title = title;

  DUMMY_THINGS[thingIndex] = updateThing;

  res.status(200).json({ thing: updatedThing });
};

const deleteThing = (req, res, next) => {
  const tid = req.params.tid;

  if (!DUMMY_THINGS.find((t) => t.id === tid)) {
    throw new HttpError("Could not find a thing for that id.", 404);
  }
  DUMMY_THINGS = DUMMY_THINGS.find((t) => t.id !== tid);
  res.status(200).json({ message: "Thing deleted." });
};

exports.getThingByID = getThingByID;
exports.getThingsByUserID = getThingsByUserID;
exports.createThing = createThing;
exports.updateThing = updateThing;
exports.deleteThing = deleteThing;
