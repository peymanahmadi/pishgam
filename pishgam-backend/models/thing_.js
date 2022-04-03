const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thingSchema = (modelName) => {
  const thing_Schema = new Schema({
    value: Number,
    setAt: { type: Date, default: Date.now() },
  });

  const thingModel = mongoose.model(modelName, thing_Schema);
  module.exports = thingModel;
  return thingModel;
};

exports.thingSchema = thingSchema;
