const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thingSchema = new Schema(
  {
    colName: { type: String, required: true },
    title: { type: String, required: true },
    categoryID: { type: String },
    apiWriteKey: { type: String, required: true },
    apiReadKey: { type: String, required: true },
    enabled: { type: Boolean, required: true },
    dataLifeCycle: { type: Number, required: true },
    creator: { type: String, required: true },
    users: [String],
  },
  { timestamps }
);

module.exports = mongoose.model("Thing", thingSchema);
