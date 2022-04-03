const mongoose = require("mongoose");
const HttpError = require("../models/http-error");
const Thing = require("../models/thing_");

const Schema = mongoose.Schema;

var thingSchema = new Schema({
  value: Number,
  setAt: { type: Date, default: Date.now() },
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
    //   // thingValue = await thingData.save();
    thingValue = await createdThing.save();
  } catch (err) {
    const error = new HttpError(err, 500);
    return next(error);
  }

  res.json({ thingValue });
};

const getThingValueByDate = async (req, res, next) => {};

exports.setThingValue = setThingValue;
exports.getThingValueByDate = getThingValueByDate;
