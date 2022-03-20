const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thingSchema = new Schema(
  {
    colName: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    categoryID: { type: String },
    apiWriteKey: { type: String, required: true, unique: true },
    apiReadKey: { type: String, required: true },
    enabled: { type: Boolean, required: true },
    dataLifeCycle: { type: Number, required: true },
    creator: { type: String, required: true },
    users: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Thing", thingSchema);
