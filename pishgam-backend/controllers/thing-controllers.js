const mongoose = require("mongoose");
const HttpError = require("../models/http-error");

const setThingValue = async (req, res, next) => {
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

const getThingValueByDate = async (req, res, next) => {};

exports.setThingValue = setThingValue;
exports.getThingValueByDate = getThingValueByDate;
