const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const thingSchema = new Schema(
  {
    colName: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    enabled: { type: Boolean, required: true },
  },
  { timestamps: true }
);

thingSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Thing", thingSchema);
