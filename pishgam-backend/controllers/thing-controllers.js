const mongoose = require("mongoose");
const moment = require("moment");
const HttpError = require("../models/http-error");
const Thing = require("../models/thing");

const Schema = mongoose.Schema;

var thingSchema = new Schema({
  value: Number,
  setAt: Date,
});

const setThingValue = async (req, res, next) => {
  let title = req.query.title;
  let value = req.query.value;
  let apiWriteKey = req.query.apikey;

  console.log(req.query);

  let thing;
  try {
    thing = await Thing.findOne({ colName: title }, "apiWriteKey");
    console.log(thing.apiWriteKey);
  } catch (err) {
    console.log(err);
    const error = new HttpError(err, 500);
    return next(error);
  }

  if (apiWriteKey !== thing.apiWriteKey) {
    const err = new HttpError("apiWriteKey is invalid", 500);
    return next(err);
  }

  let thingModel = mongoose.model(title, thingSchema);

  let createdThing = new thingModel({
    value: value,
    setAt: moment(),
  });

  // console.log(moment().format());

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
  let valueDate = req.query.date;
  const today = moment().startOf("day");

  let thingModel = mongoose.model(thingID, thingSchema);

  console.log(moment(valueDate));
  console.log(moment(valueDate).add(1, "days"));

  let thingData;
  try {
    thingData = await thingModel.find({
      // setAt: {
      //   $gte: today.toDate(),
      //   $lte: moment(today).endOf("day").toDate(),
      // },
      setAt: {
        $gte: new Date(moment(valueDate)),
        $lte: moment(valueDate).add(1, "days"),
      },
    });
  } catch (err) {
    const error = new HttpError(err, 500);
    return next(error);
  }

  // res.io.emit("Hello", value);

  res.json({
    thingValues: thingData.map((thing) => thing.toObject({ getters: true })),
  });
};

exports.setThingValue = setThingValue;
exports.getThingValueByDate = getThingValueByDate;
