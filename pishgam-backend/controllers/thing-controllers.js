const mongoose = require("mongoose");
const HttpError = require("../models/http-error");

const Schema = mongoose.Schema;

var thingSchema = new Schema({
  value: Number,
  setAt: Date,
});

const setThingValue = async (req, res, next) => {
  let title = req.query.title;
  let value = req.query.value;

  let thingModel = mongoose.model(title, thingSchema);

  let createdThing = new thingModel({
    value: value,
    setAt: Date.now(),
  });

  let thingValue;
  try {
    thingValue = await createdThing.save();
  } catch (err) {
    const error = new HttpError(err, 500);
    return next(error);
  }

  res.status(201).json({ thingValue: createdThing });
};

const getThingValueByDate = async (req, res, next) => {
  let thingID = req.params.tid;

  let thingModel = mongoose.model(thingID, thingSchema);

  let thingData;
  try {
    thingData = await thingModel.find({});
  } catch (err) {
    const error = new HttpError(err, 500);
    return next(error);
  }

  res.json({
    thingValues: thingData.map((thing) => thing.toObject({ getters: true })),
  });
};

exports.setThingValue = setThingValue;
exports.getThingValueByDate = getThingValueByDate;
